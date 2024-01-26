import { Command } from 'commander';

const commander = new Command()

commander
  .name('crud-cli')
  .version('1.0.0','-v','--version')
  
  .option('-v, --view', 'see users')
  .option('-c, --create', 'create user')
  .option('-d, --delete <id>', 'remove user')
  .option('-e, --edit <id>', 'edit user')
 commander.parse()
  
switch(Object.keys(commander.opts())[0]){
  case 'view':
    console.log('view')
    break
  case 'create':
    console.log('teste')
    break
  case 'edit':
    console.log('teste')
    break
  case 'delete':
    console.log('teste')
  break
  default:
    console.log('não tem')
    break
}

export default commander