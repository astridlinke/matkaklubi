-- CreateTable
CREATE TABLE "Trek" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startAt" TEXT NOT NULL,
    "endsAt" TEXT NOT NULL,
    "locationlongitude" TEXT NOT NULL,
    "loncationLatitude" TEXT NOT NULL,
    "localDescription" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Trek_pkey" PRIMARY KEY ("id")
);
