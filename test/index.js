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
                    blockType:Scratch.BlockType.COMMAND,
                    text:"[TEXT]と表示する",
                    arguments:{
                        TEXT:{
                        type:Scratch.ArgumentType.STRING,
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
Scratch.extensions.register(new Scratch3Hello())

