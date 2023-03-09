-- CreateTable
CREATE TABLE "todos" (
    "id" UUID NOT NULL,
    "name" STRING NOT NULL,
    "status" BOOL NOT NULL DEFAULT false,
    "started_at" TIMESTAMPTZ NOT NULL,
    "ended_at" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "primary" PRIMARY KEY ("id")
);
