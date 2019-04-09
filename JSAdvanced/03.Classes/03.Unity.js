class Rat{
    constructor(name){
        this.name=name;
        this.unitedRats =[];
    }

    getRats(){
        return this.unitedRats;
    }
    
    toString(){
        let result ='';
        result+=this.name+'\n';
        Array.from(this.getRats.unitedRats).forEach(rat=>{
            result+=`## ${rat.name.toString()} \n`;
        });

        result=result.trim();
        return result;
    }

    unite(newRat){
        if(!newRat){

        }else if(newRat.constructor.name!=='Rat'){

        }else{
            this.unitedRats.push(newRat)
        }
    }
}