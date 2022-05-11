// функция для рассчета математических выражений, записанных в строках

const mathParser = (string)=>{
    let str = string;
    while ((str.match( /\(/g ) || []).length > (str
        .match( /\)/g ) || []).length) {
            str = str+')';
        }
    let argumentArr = str.replace(/\s/g, '').match(/[+\-*/)(eπ√]|([0-9.\s]+)/g) || []; //из данной строки создаёт массив, пример: "(123 - 3487)/2" переделается в ['(', '123', '-', '3487', ')', '/', '2']
    
    while(argumentArr.includes('e')) {
        const i = argumentArr.indexOf('e');
        argumentArr.splice( i-1 , 4 , argumentArr[i-1]+argumentArr[i]+argumentArr[i+1]+argumentArr[i+2])
    }
    console.log("массив в начале: "+argumentArr)

    const parseMathExp = (argumentsArr)=>{
        
        const countFragment= (arr)=>{ //функция, которая может считать фрагмент выражения, данного в виде массива из прошлого комментария, если во фрагмене нет скобок, н.п. ['1','-','33','/','45'] 
            console.log('arr.length: '+ arr.length)
            if (arr.length===0 || !arr) {
                arr = ["0"];
            }
            else {while (arr.includes('π')) {
                arr.splice(arr.indexOf('π'),1, Math.PI);
                console.log("Корень: "+arr);
            }
            while (arr.includes('√')) {
                arr.splice(arr.indexOf('√'),2, Math.sqrt(arr[arr.indexOf('√')+1]));
                console.log("Корень: "+arr);
            }
            while (arr.includes('*') || arr.includes('/')) {
                const symbolIndexIncrease = arr.indexOf('*');
                const symbolIndexDivision = arr.indexOf('/');
                if ((symbolIndexIncrease<symbolIndexDivision || 
                    symbolIndexDivision===-1) && 
                    symbolIndexIncrease!==-1) {
                        arr.splice(symbolIndexIncrease-1,3,+arr[symbolIndexIncrease-1]*(+arr[symbolIndexIncrease+1]));
                        console.log("Умножение: "+arr);
                    }
                else {
                    arr.splice(symbolIndexDivision-1,3,+arr[symbolIndexDivision-1]/(+arr[symbolIndexDivision+1]));
                    console.log("Деление: "+arr);
                }
            }
            if (arr[0]==='+' || arr[0]==='-') {
                arr.splice(0,2, arr[0]==="-" ? -(+arr[1]) : +arr[1])
            }
            while (arr.length>1) {
                arr.splice( 0, 3, ( +arr[0] + ( arr[1]==='+'? +arr[2] : -(+arr[2]) ) ) );
                console.log("сложение/вычитание: "+arr);
            }
            while (arr.length>1) {
                argumentsArr.splice( 0, 3, ( +argumentsArr[0] + ( argumentsArr[1]==='+'? +argumentsArr[2] : -(+argumentsArr[2]) ) ) );
                console.log("finalFragment: "+argumentsArr);
            }
            }
            console.log("bebra: " +arr[0])
            arr = arr[0]
        }
        while (argumentsArr.includes('(')) { // цикл работает, пока не упростит выражение до выражения без скобок
            let opening;
            let closing;
            let i=0;
            argumentsArr.forEach((item,k)=>{ // здесь определяется, какие открывающие  к каким закрывающим скобкам относятся, их индексы заносятя в переменные, созданные двумя строчками выше
                if (item==="(") {
                    if (opening===null || opening===undefined) {
                        opening=k;
                        console.log("opening: "+k);
                    }
                    else {
                        i++;
                    }
                }
                if (item===")") {
                    if (i===0) {
                        closing=k;
                        console.log("closing: "+k);
                    }
                    else  {
                        i--;
                    }
                }
            });
            
            let fragment = argumentsArr.slice(opening+1, closing); // здесь из массива вырезается кусочек, заключенный в скбки первого разряда (т.е скобки в скобках это скобки второго разряда, скобки в скбках в скобках - третьего)
            console.log("fragment: "+fragment);
            if (fragment.includes("(")) {
                parseMathExp(fragment); // если этот кусочек тоже содержит скобки, происходит рекурсия
            }
            
            countFragment(fragment); // с помощью функции выражение, что было в скобках, заменяется одним числом, получившимся в результате рассчёта
            argumentsArr.splice(opening, closing-opening+1,
                 fragment);
            console.log("arguments: "+argumentsArr);
        }
        console.log('скобок нет');
        countFragment(argumentsArr);
        return (argumentsArr[0]);
    };
    const solving = parseMathExp(argumentArr);
    return ( !isNaN(solving)? solving : "Ошибка")
}
export default mathParser;
// копипаста для знаков:   √   π

console.log(['(', ')'].splice(1,0))