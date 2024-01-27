import { Command } from 'commander';
import request from './request.js'
import getData from './prompt.js'

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
    getData()
    break
  case 'edit':
    getData(commander.opts().edit)
    break
  case 'delete':
    request.deleteUser(commander.opts().delete)
  break
  default:
    console.log('Error')
    break
}

export default commander