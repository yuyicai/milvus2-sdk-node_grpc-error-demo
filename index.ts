import { MilvusClient } from '@zilliz/milvus2-sdk-node';

(async () => {
    // build client
    const milvusClient = new MilvusClient({
        address: 'localhost:19530'
    });
    await milvusClient.checkHealth();
})();