/* istanbul ignore file */
"use strict";
import { quais } from "quais";
function getType(param, flexible) {
    if (param.type === "address" || param.type === "string") {
        return "string";
    }
    if (param.type === "bool") {
        return "boolean";
    }
    if (param.type.substring(0, 5) === "bytes") {
        if (flexible) {
            return "string | quais.utils.BytesLike";
        }
        return "string";
    }
    let match = param.type.match(/^(u?int)([0-9]+)$/);
    if (match) {
        if (flexible) {
            return "quais.BigNumberish";
        }
        if (parseInt(match[2]) < 53) {
            return 'number';
        }
        return 'quais.BigNumber';
    }
    if (param.type === "array") {
        return "Array<" + getType(param.arrayChildren) + ">";
    }
    if (param.type === "tuple") {
        let struct = param.components.map((p, i) => `${p.name || "p_" + i}: ${getType(p, flexible)}`);
        return "{ " + struct.join(", ") + " }";
    }
    throw new Error("unknown type");
    return null;
}
export const header = "import { quais } from \"quais\";\n\n";
export function generate(contract, bytecode) {
    let lines = [];
    lines.push("export class " + contract.name + " extends quais.Contract {");
    lines.push("");
    lines.push("    constructor(addressOrName: string, providerOrSigner: quais.Signer | quais.providers.Provider) {");
    lines.push("        super(addressOrName, new.target.ABI(), providerOrSigner)");
    lines.push("    }");
    lines.push("");
    lines.push(`    connect(providerOrSigner: quais.Signer | quais.providers.Provider): ${contract.name} {`);
    lines.push(`        return new (<{ new(...args: any[]): ${contract.name} }>(this.constructor))(this.address, providerOrSigner)`);
    lines.push("    }");
    lines.push("");
    lines.push(`    attach(addressOrName: string): ${contract.name} {`);
    lines.push(`        return new (<{ new(...args: any[]): ${contract.name} }>(this.constructor))(addressOrName, this.signer || this.provider)`);
    lines.push("    }");
    for (let signature in contract.interface.functions) {
        if (signature.indexOf('(') === -1) {
            continue;
        }
        let fragment = contract.interface.functions[signature];
        console.log(fragment);
        let output = "Promise<quais.providers.TransactionResponse>";
        let overrides = "quais.CallOverrides";
        if (fragment.constant == false) {
            if (fragment.payable) {
                overrides = "quais.PayableOverrides";
            }
            else {
                overrides = "quais.Overrides";
            }
        }
        else if (fragment.outputs.length > 0) {
            if (fragment.outputs.length === 1) {
                output = "Promise<" + getType(fragment.outputs[0]) + ">";
            }
            else {
                // If all output parameters are names, we can specify the struct
                if (fragment.outputs.filter((o) => (!!o.name)).length === fragment.outputs.length) {
                    output = "Promise<{ " + fragment.outputs.map((o, i) => ((o.name || ("arg" + String(i))) + ": " + getType(o))).join(", ") + " }>";
                }
                else {
                    // Otherwise, all we know is that it will be an Array
                    output = "Promise<{ Array<any> }>";
                }
            }
        }
        let inputs = [];
        let passed = [];
        fragment.inputs.forEach((input, index) => {
            let name = (input.name || ("p_" + index));
            let type = getType(input, true);
            inputs.push(name + ": " + type);
            passed.push(name);
        });
        inputs.push("_overrides?: " + overrides);
        passed.push("_overrides");
        lines.push("");
        lines.push(`    ${fragment.name}(${inputs.join(', ')}): ${output} {`);
        lines.push(`        return this.functions["${signature}"](${passed.join(", ")});`);
        lines.push("    }");
    }
    lines.push("");
    lines.push("    static factory(signer?: quais.Signer): quais.ContractFactory {");
    lines.push("        return new quais.ContractFactory(" + contract.name + ".ABI(), " + contract.name + ".bytecode(), signer);");
    lines.push("    }");
    lines.push("");
    lines.push("    static bytecode(): string {");
    if (bytecode == null) {
        lines.push('        return quais.errors.throwError("no bytecode provided during generation", quais.errors.UNSUPPORTED_OPERATION, { operation: "contract.bytecode" });');
    }
    else {
        lines.push('        return "' + bytecode + '";');
    }
    lines.push("    }");
    lines.push("");
    lines.push("    static ABI(): Array<string> {");
    lines.push("        return [");
    contract.interface.fragments.forEach((fragment) => {
        lines.push(`            "${fragment.format(quais.utils.FormatTypes.full)}",`);
    });
    lines.push("        ];");
    lines.push("    }");
    lines.push("}");
    let output = lines.join("\n") + "\n";
    return output;
}
//# sourceMappingURL=typescript.js.map