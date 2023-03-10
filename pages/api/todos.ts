// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await prisma.todos.findMany({
      orderBy: { id: "desc" },
    });
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { name, started_at, ended_at } = req.body;
    const createTodo = await prisma.todos.create({
      data: {
        name,
        started_at,
        ended_at,
      },
    });
    res.status(201).json(createTodo);
  } else if (req.method === "DELETE") {
    const id = req.body.id;
    const deleteTodo = await prisma.todos.delete({
      where: {
        id,
      },
    });
    res.json(deleteTodo);
  } else {
    res.status(405).end();
  }
}
