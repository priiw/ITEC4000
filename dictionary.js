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
const knit = new StitchDictionary("knit", "K", "knit", "k", 1);//Knit stitch
const purl = new StitchDictionary("purl", "P", "purl", "p", 1);//Purl stitch
const k2tog = new StitchDictionary("knit 2 together", "k2tog", "increase - left leaning", "U", 2);
const ssk =  new StitchDictionary("slip slip knit", "ssk", "increase - right leaning", "V", 2);
const m1= new StitchDictionary("make one","m1", "make one",">", 1);
