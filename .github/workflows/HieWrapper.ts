import {workspace} from 'coc.nvim'

function exist(): Boolean {
  return false
}
function install(): void {
}
function cmd(): string {
  if (!exist()) {
    install()
  }
  return ""
}
function run(): void {
  workspace.runCommand(cmd()).then(_m => {}, _e => {
    workspace.showMessage(_e,
      'error')
  })
}
export {run as hieRun}
