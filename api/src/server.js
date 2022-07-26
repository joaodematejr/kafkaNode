import express from 'express';
import { Kafka } from 'kafkajs';
import router from './routes';

const app = express();

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
});

const producer = kafka.producer()

app.use((req, res, next) => {
    req.producer = producer;
    return next();
});

app.use(router);

async function main() {
    await producer.connect();
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

main().catch(console.error);