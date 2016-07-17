# hexo-filter-file-link

A plugin to make convenient for linking local posted file in markdown style

## Installation

cd to hexo root

```
npm install hexo-filter-file-link --save
```

Hexo will detect automatically

## Example

Here is your post files

```
- sources
  |- _post
      |- a.md
      |- c.md
```

And then you want to link `c.md` in `a.md` in markdown style:

Here is content of `a.md`

```
blublublue, this is page [C](file://c.md)

```

After process of `hexo-filter-file-link` and before `render`

`a.md` will be transformed as:

```
blublublue, this is page [C](http://yoursite.com/c)

```

This is a real url which capturing during `before_post_render` event

## TODO

- [ ] unit test
- [ ] any official alternative ways ?
- [ ] `file://` should be configurable
