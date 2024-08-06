
export {addNewSqript}

function addNewSqript(name)
{
    let script = document.createElement('script');
    script.type = 'module';
    script.setAttribute('src',`/js/${name}.js`);
    document.body.appendChild(script);
}
