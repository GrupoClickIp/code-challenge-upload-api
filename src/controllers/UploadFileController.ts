import { FastifyReply, FastifyRequest } from 'fastify';

export class UploadFileController {
  async execute(req: FastifyRequest, reply: FastifyReply) {    
    reply.send({ msg: "Hello World" })
  }
}