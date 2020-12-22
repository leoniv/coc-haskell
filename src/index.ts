import {
  ExtensionContext,
  LanguageClient,
  LanguageClientOptions,
  workspace,
  services,
} from "coc.nvim";
import {serverOptions} from "./hie-wrapper"

export async function activate(ctx: ExtensionContext): Promise<void> {
  ctx.logger.info("Intit coc-haskell")
  launchHie(ctx);
}

async function launchHie(ctx: ExtensionContext) {
  const clientOpts: LanguageClientOptions = {
    documentSelector: [{scheme: 'file', language: 'haskell'}],
    synchronize: {
      configurationSection: 'haskell',
      fileEvents:
        workspace.createFileSystemWatcher('{**/*.hs,**/*.cabal}')
    },
    initializationOptions: {},
  }


  const client: LanguageClient = new LanguageClient(
    "haskell", "Haskell language server", serverOptions(), clientOpts
  );

  client.onReady().then((_) => {})
  client.start()
  ctx.subscriptions.push(services.registLanguageClient(client))
}
