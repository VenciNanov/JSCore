function solve(input) {
    //  debugger

    let regex = new RegExp(/(<\w*?>)\w*?(<\/\w*?>)/, "gm")
    //let regex1 = new RegExp(/<.*?>/, "")
    let text = "";
    Array.from(input).forEach(x => {
        
        

    })
}

solve(['<h1><span>Hello World!</span></h1>',
    '<p>I am Peter.']
)

solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']
);