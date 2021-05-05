import { injectable } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { CommonMenus, CommonCommands } from "@theia/core/lib/browser";
// import { WorkspaceCommands } from "@theia/workspace/lib/browser";
import { TerminalMenus } from "@theia/terminal/lib/browser/terminal-frontend-contribution";

// Remove Menus
export const RemoveMenuCommand = {
    id: 'CheckerFrameworkDemo.removeMenu'
};

@injectable()
export class RemoveMenuContribution implements CommandContribution, MenuContribution {

    constructor() { }

    registerCommands(registry: CommandRegistry): void {
        // Help
        registry.unregisterCommand(CommonCommands.ABOUT_COMMAND);

        // File
        // registry.unregisterCommand(WorkspaceCommands.NEW_FILE);
        // registry.unregisterCommand(WorkspaceCommands.NEW_FOLDER);
        // registry.unregisterCommand(WorkspaceCommands.OPEN);
        // registry.unregisterCommand(WorkspaceCommands.OPEN_WORKSPACE);
        // registry.unregisterCommand(WorkspaceCommands.OPEN_RECENT_WORKSPACE);
        // registry.unregisterCommand(WorkspaceCommands.SAVE_WORKSPACE_AS);
        // registry.unregisterCommand(WorkspaceCommands.SAVE_AS);
        // registry.unregisterCommand(WorkspaceCommands.SAVE_WORKSPACE_AS);
        // registry.unregisterCommand(WorkspaceCommands.CLOSE);
    }

    registerMenus(menus: MenuModelRegistry): void {
        menus.unregisterMenuAction(CommonMenus.HELP.slice(-1)[0]);

        menus.unregisterMenuAction(CommonMenus.FILE.slice(-1)[0]);
        menus.unregisterMenuAction(CommonMenus.FILE_SETTINGS_SUBMENU.slice(-1)[0]);

        menus.unregisterMenuAction(TerminalMenus.TERMINAL.slice(-1)[0]);

        // Add settings sub menu to Edit
        menus.registerSubmenu(CommonMenus.FILE_SETTINGS_SUBMENU, 'Settings');
    }
}

// dummy class to remove terminal
// @injectable()
// export class TerminalFrontendContributionStub {
//     registerMenus(): void {}
//     registerCommands(): void {}
// }

// @injectable()
// export class TaskFrontendContributionStub {
//     registerMenus(): void {}
//     registerCommands(): void {}
//     onStart(): void {}
//     onStop(): void {}
//     updateRunningTasksItem(): void {}
//     registerQuickOpenHandlers(): void {}
//     registerKeybindings(): void {}
// }