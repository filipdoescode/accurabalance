import type { CollectionConfig, CollectionSlug } from "payload"
import slugify from "slugify"

import { Categories } from "./Categories"
import { Tags } from "./Tags"

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "author", "publishedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: Categories.slug as CollectionSlug,
      hasMany: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: Tags.slug as CollectionSlug,
      hasMany: true,
    },
    {
      name: "publishedAt",
      type: "date",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      defaultValue: "draft",
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data }) => {
        if (data?.title && !data?.slug) {
          data.slug = slugify(data.title, { lower: true, strict: true })
        }
      },
    ],
  },
}
