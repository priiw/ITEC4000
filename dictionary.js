//Dictionary

class StitchDictionary{
    constructor(name, abbreviation, description, symbol, stitch){
        this._name = name;
        this._abbreviation = abbreviation;
        this._description = description;
        this._symbol = symbol;
        this._stitch = stitch; 
    }
    get name(){
        return this._name;
    }
    get abbreviation(){
        return this._abbreviation;
    }
    get description(){
        return this._description;
    }
    get symbol(){
        return this._symbol;
    }
    get stitch(){
        return this._stitch;
    }
}
const knit = new Stitch("knit", "K", "knit", "k", 1);//Knit stitch
const purl = new Stitch("purl", "P", "purl", "p", 1);//Purl stitch

export default StitchDictionary; 