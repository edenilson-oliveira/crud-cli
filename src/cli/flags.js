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
  
console.log(commander.opts().edit)

export default commander