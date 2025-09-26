// storage-adapter-import-placeholder
import path from "path"
import { fileURLToPath } from "url"
import { mongooseAdapter } from "@payloadcms/db-mongodb" // database-adapter-import
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Categories } from "./collections/Categories"
import { Media } from "./collections/Media"
import { Posts } from "./collections/Posts"
import { Tags } from "./collections/Tags"
import { Users } from "./collections/Users"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Posts, Categories, Tags, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "types/payload-types.ts"),
  },
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  // @ts-ignore
  sharp,
  plugins: [
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
