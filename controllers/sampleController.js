exports.helloWorld = (req, res) => {
    res.send('Hello World from Docker!');
}

exports.helloWorldWithCustomName = (req, res) => {
    res.send(`Hello World from Docker! Written by ${req.params.name}`);
}

exports.helloWorldButNotReally = (req, res) => {
    res.send('If you accessed the 3 of the routes, you got it right.');
}

