import { Command } from 'commander';
import request from './request.js'
import showPrompts from './prompt.js'

const commander = new Command()

commander
  .name('crud-cli')
  .version('1.0.0','-v','--version')
  
  .option('-u, --view', 'see users')
  .option('-c, --create', 'create user')
  .option('-d, --delete <id>', 'remove user')
  .option('-e, --edit <id>', 'edit user')
 commander.parse()
  
switch(Object.keys(commander.opts())[0]){
  case 'view':
    request.viewUsers()
    break
  case 'create':
    showPrompts()
    break
  case 'edit':
    showPrompts(commander.opts().edit)
    break
  case 'delete':
    request.deleteUser(commander.opts().delete)
  break
  default:
    console.log('Error')
    break
}

export default commander