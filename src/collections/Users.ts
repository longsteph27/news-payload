import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      secure: process.env.PAYLOAD_EVN !== 'development',
      sameSite: process.env.PAYLOAD_EVN === 'testing' ? 'none' : 'lax',
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;