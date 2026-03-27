enum UserRole {
  USER
  ADMIN
}

enum ContactType {
  QUESTION
  FEEDBACK
  SUPPORT
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  password      String?
  role          UserRole  @default(USER)
  emailVerified DateTime?
  image         String?

  reviews       Review[]
  events        Event[]

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}


model Contact {
  id           String      @id @default(cuid())
  name         String?
  email        String?     @unique
  contactType  ContactType @default(QUESTION)
  text         String?
  createdAt    DateTime    @default(now())
  updatedAt    DateTime    @updatedAt
}


model Review {
  id        String     @id @default(cuid())
  rating    Int
  comment   String?
  userId    String
  itemId    String
  user      User       @relation(fields: [userId], references: [id])
  item      Item    @relation(fields: [itemId], references: [id])
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}

model Item {
  id        String   @id @default(cuid())
  url       String
  fileId    String   @unique
  altText   String?
  
  width     Int?
  height    Int?
  size      Int? 
  mimeType  String?

  review    Review[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}


model Event {
  id String @id @default(cuid())
  title String
  description String
  image String
  start DateTime
  participantId String?
  participant User? @relation(fields: [participantId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Announcement {
  id String @id @default(cuid())
  title String
  description String
  text String
  url String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}