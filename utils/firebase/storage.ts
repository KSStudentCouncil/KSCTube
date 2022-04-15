import { getStorage, ref } from 'firebase/storage'

export const storage = getStorage()

export const UsersRef = ref(storage, 'users')
export const VideosRef = ref(storage, 'videos')
