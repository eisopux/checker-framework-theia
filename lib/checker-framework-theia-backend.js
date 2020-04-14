"use strict";
/**
 * Generated using theia-plugin-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
const theia = require("@theia/plugin");
const path = require("path");
function start(context) {
    const JAR_PATH = path.resolve(__dirname, '..', 'lsp4xml', 'org.eclipse.lsp4xml-all.jar');
    const XML_LS_ID = 'xml';
    const xmlLanguageServerInfo = {
        id: XML_LS_ID,
        name: 'XML',
        globPatterns: ['**/*.xml'],
        command: 'java',
        args: ['-jar', JAR_PATH]
    };
    context.subscriptions.push(theia.languageServer.registerLanguageServerProvider(xmlLanguageServerInfo));
    registerCommands(xmlLanguageServerInfo, context);
}
exports.start = start;
function registerCommands(lsInfo, context) {
    const startCommand = {
        id: 'Start XML LS',
        label: "XML: Start XML Language Server"
    };
    const stopCommand = {
        id: 'Stop XML LS',
        label: "XML: Stop XML Language Server"
    };
    context.subscriptions.push(theia.commands.registerCommand(startCommand, (...args) => {
        context.subscriptions.push(theia.languageServer.registerLanguageServerProvider(lsInfo));
    }), theia.commands.registerCommand(stopCommand, (...args) => {
        theia.languageServer.stop(lsInfo.id);
    }));
}
function stop() {
}
exports.stop = stop;
//# sourceMappingURL=checker-framework-theia-backend.js.map