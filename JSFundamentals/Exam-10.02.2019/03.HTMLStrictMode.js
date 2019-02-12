function solve(input) {
    let final = [];
    for (let string of input) {
        if (string.match(/^([<])([\w]+[>])+(.+)(\1[/]\2)$/g)) {
            final.push(string.replace(/(<([^>]+)>)/ig, ""))
        }
    }
    console.log(final.join(' '))
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