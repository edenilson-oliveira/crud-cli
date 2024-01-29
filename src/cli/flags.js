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
  
  async function IdExist(id){
    const user = await request.viewUsersById(id)
    if(user.length > 0){
      return true
    }
    
    else{
      console.log('id not exists')
      process.exit()
    }
  }
  
  
switch(Object.keys(commander.opts())[0]){
  case 'view':
    request.viewUsers()
    break
  case 'create':
    showPrompts()
    break
  case 'edit':
    if(IdExist(commander.opts().edit)){
      showPrompts(commander.opts().edit)
    }
    
    break
  case 'delete':
    if(IdExist(commander.opts().delete)){
      request.deleteUser(commander.opts().delete)
    }
    break
  default:
    console.log('Error flags not is valid')
    break
}

export default commander