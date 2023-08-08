module.exports = function check(str, bracketsConfig) {
   let result = str;

      for (let i = 0; i < str.length; i++){ 
             result = result.replaceAll("[]","")
                            .replaceAll("{}","")
                            .replaceAll("()","")
                            .replaceAll("||","")
                            .replaceAll("12","")
                            .replaceAll("34","")
                            .replaceAll("56","")
                            .replaceAll("77","")
                            .replaceAll("88","");  
      }
    
    return result.length === 0 ? true: false;
}
