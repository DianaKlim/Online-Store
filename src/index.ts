//imports
import './sass/style.scss';
import './ts/module.ts'

//check
interface Account {
    id: number
    displayName: string
    version: 1
  }
   
  function welcome(user: Account) {
    console.log('index.ts', user.id, user.displayName)
  }

  welcome({id: 2, displayName: 'dia', version: 1})