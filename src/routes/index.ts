import { FastifyInstance } from 'fastify';
import { UploadFileController } from '../controllers/UploadFileController';

const uploadFileController = new UploadFileController();

export async function AppRoutes(app: FastifyInstance) {
  app.post('/upload', uploadFileController.execute)
}