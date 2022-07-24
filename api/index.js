class Scratch3Api{
    constructor(runtime){
        this.runtime=runtime;
    }
    getInfo () {
        return{
            id:"api",
            name:'api',
            blocks:[
                {
                    opecode:"MorphologicalAnalyzer",
                    blockType:Scratch.BlockType.REPORTER,
                    text:"[TEXT]を解析[ID]",
                    arguments:{
                        TEXT:{
                        type:Scratch.ArgumentType.STRING,
                        defaultValue:"こんにちは"
                        },
                        ID:{
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"ここにID"
                        }
                    } 
                }
            ]
        };
    }
    MorphologicalAnalyzer(args){
        let Sentence="吾輩は猫である"
var Json = new XMLHttpRequest();
Json.onload = function(){
   Result=JSON.parse(Json.responseText);
   return(Result.word_list)    
  
};
Json.open('POST', 'https://labs.goo.ne.jp/api/morph');
Json.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
Json.send('app_id='+args.ID+'&sentence='+args.TEXT);
    }
}
Scratch.extensions.register(new Scratch3Api())
