import { type Database } from '@/app/types/database'

type PostsEntity = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']
type InsertEntity = Database['public']['Tables']['posts']['Insert']

export type Post = PostsEntity & {
    user: UserEntity | null
}
export type InsertPost = InsertEntity