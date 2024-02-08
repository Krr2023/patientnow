exports.handler = async (event, context) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    };

    const body = (send) => {
        send(`data: ${new Date().toISOString()}\n\n`);
    };

    return {
        statusCode: 200,
        headers,
        body
    };
};
