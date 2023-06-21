# CASL Ability package for user permissions and access control

## Overview

The CASL Ability package is the core of CASL that allows checking and defining user permissions for application access.

### Installation

To install the CASL Ability package, use one of the following package managers:

```
npm install @casl/ability
```

### Getting Started

Here's an example how this package can be used to implement user permissions and access control. 

Define abilities for a blog website where visitors:

<li> Can read blog posts </li> 
<li> Can manage their own posts </li> 
<li> Cannot delete a post if it was created more than a day ago </li> 

#### Step 1. Define Abilities

```javascript
import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { User } from '../models'; // application specific interfaces

/**
 * @param user contains details about the logged-in user: its id, name, email, etc.
 */
function defineAbilitiesFor(user) {
  const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

  can('read', 'BlogPost');
  can('manage', 'BlogPost', { author: user.id });
  cannot('delete', 'BlogPost', {
    createdAt: { $lt: Date.now() - 24 * 60 * 60 * 1000 }
  });

  return build();
}
```

#### Step 2. Check Abilities

Later on, you can check abilities using the `can` and `cannot` methods of the Ability instance.

```javascript
import { BlogPost, ForbiddenError } from '../models';

const user = getLoggedInUser(); // app specific function
const ability = defineAbilitiesFor(user);

ability.can('read', 'BlogPost'); // true if ability allows reading at least one post

const post = new BlogPost({ title: 'What is CASL?' });
ability.cannot('read', post); // true if there is no ability to read this particular blog post

ForbiddenError.from(ability).throwUnlessCan('read', post); // throw an error if there is a missed ability
```

#### Step 3. Database Integration

CASL has a complementary package called `@casl/mongoose`, which provides easy integration with MongoDB and mongoose.

```javascript
import { accessibleRecordsPlugin } from '@casl/mongoose';
import mongoose from 'mongoose';

mongoose.plugin(accessibleRecordsPlugin);

const user = getUserLoggedInUser(); // app specific function
const ability = defineAbilitiesFor(user);

const BlogPost = mongoose.model('BlogPost', mongoose.Schema({
  title: String,
  author: mongoose.Types.ObjectId,
  content: String,
  createdAt: Date,
  hidden: { type: Boolean, default: false }
}));

const posts = await Post.accessibleBy(ability).where({ hidden: false });
const hiddenPosts = await Post.find({ hidden: true }).accessibleBy(ability);
const updatablePosts = await Post.accessibleBy(ability, 'update');
```

Refer to the [Database integration](https://casl.js.org/v5/en/database-integration) for more details.

### Conclusion

By incorporating this package, you can set user permission and access control for the application. For advanced usage and further customization options, refer to [the official documentation](https://www.npmjs.com/package/@casl/ability)

For detailed information and in-depth introduction, please refer to the [CASL Documentation](https://casl.js.org/v5/en/).

Note: All the examples above are written in ES6 using ES modules. CASL also has sophisticated support for TypeScript.
