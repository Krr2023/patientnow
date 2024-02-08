// functions/realtime.js

exports.handler = async (event, context) => {
    const number = event.queryStringParameters.number || 0;

    const headers = {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    };

    const body = `
        <html>
        <head>
            <title>Real-time Number</title>
            <script>
                const eventSource = new EventSource('/.netlify/functions/realtime?number=${number}');
                eventSource.onmessage = function(event) {
                    document.getElementById('number').innerText = event.data;
                };
            </script>
        </head>
        <body>
            <h1>Real-time Number</h1>
            <div id="number">${number}</div>
        </body>
        </html>
    `;

    return {
        statusCode: 200,
        headers,
        body
    };
};
