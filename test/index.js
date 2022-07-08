const ArgumentType=require("https://github.com/LLK/scratch-vm/blob/develop/src/extension-support/argument-type.js");
const BlockType=require("https://github.com/LLK/scratch-vm/blob/develop/src/extension-support/block-type.js");

class Scratch3Hello{
    constructor(runtime){
        this.runtime=runtime;
    }

    getInfo () {
        return{
            id:"hello",
            name:'hello',
            blocks:[
                {
                    opecode:"showAlert",
                    blockType:BlockType.COMMAND,
                    text:"[TEXT]と表示する",
                    arguments:{
                        TEXT:{
                        type:ArgumentType.STRING,
                        defaultValue:"こんにちは"
                        }
                    } 
                }
            ]

        };
    }

    showAlert(args){
        alert(args.TEXT)
    }
}
