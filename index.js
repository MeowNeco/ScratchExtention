class Analyzer {
    constructor(){}
    
    getInfo(){
        return{
            id:"analyzer",
            name:"Analyzer",
            blocks:[
                {
                    opcode:"analyse",
                    blockType:Scratch.BlockType.REPORTER,
                    text:'[TEXT]を解析する（[ID]）',
                    arguments:{
                        TEXT:{
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"吾輩は猫である"
                        },
                        ID:{
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"ここにID"
                        }

                    }
                }
            ]

        }
    }
    analyse(args){
        let Result = new XMLHttpRequest();
        Result.open('POST', 'https://labs.goo.ne.jp/api/morph');
        Result.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        Result.send('app_id='+(args.ID)+'&sentence='+(args.TEXT));
        console.log(Result)
    }
}
Scratch.extensions.register(new Analyzer());
