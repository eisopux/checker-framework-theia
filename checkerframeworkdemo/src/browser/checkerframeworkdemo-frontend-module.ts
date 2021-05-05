/**
 * Generated using theia-extension-generator
 */
 import {
    RemoveMenuContribution,
    // TerminalFrontendContributionStub,
    // TaskFrontendContributionStub
 } from './checkerframeworkdemo-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
// import { TerminalFrontendContribution } from '@theia/terminal/lib/browser/terminal-frontend-contribution';
// import { TaskFrontendContribution } from '@theia/task/lib/browser/task-frontend-contribution';
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // enable/disable certain menus
    bind(CommandContribution).to(RemoveMenuContribution);
    bind(MenuContribution).to(RemoveMenuContribution);
    // bind(TerminalFrontendContribution).to(TerminalFrontendContributionStub);
    // bind(TaskFrontendContribution).to(TaskFrontendContributionStub);
});
