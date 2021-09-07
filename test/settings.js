import path from 'path'
import { fileURLToPath } from 'url';
import {GreenlightSettings} from '../build/module.js'

const PATH=path.dirname(fileURLToPath(import.meta.url));

let settings_array={

    //Place your settings here

    MODULE_NAME:"mytestmodule",

    TEMPLATE_DIR:path.join(PATH,'templates'),

    STATIC_DIR:path.join(PATH,'static'),

    BACKEND:{'TYPE':'sqlite',
        'DATABASE_PATH':path.join(PATH,'database.db'),        
    },

    PRODUCTION:false,

    STATIC_PATH: '/static',
}


//Settings object setup section. Do not edit the code below

let settings=new GreenlightSettings();//Greenlight settings object

settings.setSettings(settings_array);


export default settings;

