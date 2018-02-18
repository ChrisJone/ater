define({ "api": [
  {
    "type": "delete",
    "url": "/address/:id",
    "title": "删除某个指定资源",
    "description": "<p>删除某个指定资源</p>",
    "name": "delete",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address/:id"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/address.js",
    "groupTitle": "address",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/address/:id",
    "title": "获取某个指定资源的信息",
    "description": "<p>获取某个指定资源的信息</p>",
    "name": "get",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/address/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/address.js",
    "groupTitle": "address",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/address",
    "title": "列出所有资源",
    "description": "<p>列出所有资源</p>",
    "name": "getAll",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>指定第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>指定每页的记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>指定is_show过滤</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/address"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/address.js",
    "groupTitle": "address",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/address/default",
    "title": "获取默认地址",
    "description": "<p>获取默认地址</p>",
    "name": "getDefault",
    "group": "address",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/address/default"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/address.js",
    "groupTitle": "address",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/address",
    "title": "新建一个资源",
    "description": "<p>新建一个资源</p>",
    "name": "post",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/address"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"新增成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/address.js",
    "groupTitle": "address",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/address/:id",
    "title": "更新某个指定资源的信息",
    "description": "<p>更新某个指定资源的信息</p>",
    "name": "put",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/address/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/address.js",
    "groupTitle": "address",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/address/default/:id",
    "title": "设置默认地址",
    "description": "<p>设置默认地址</p>",
    "name": "setDefault",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/address/default/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/address.js",
    "groupTitle": "address",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/banner/:id",
    "title": "删除某个指定资源",
    "description": "<p>删除某个指定资源</p>",
    "name": "delete",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/banner/:id"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/banner.js",
    "groupTitle": "banner",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/banner/:id",
    "title": "获取某个指定资源的信息",
    "description": "<p>获取某个指定资源的信息</p>",
    "name": "get",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/banner/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/banner.js",
    "groupTitle": "banner",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/banner",
    "title": "列出所有资源",
    "description": "<p>列出所有资源</p>",
    "name": "getAll",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>指定第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>指定每页的记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>指定is_show过滤</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/banner"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/banner.js",
    "groupTitle": "banner",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/banner",
    "title": "新建一个资源",
    "description": "<p>新建一个资源</p>",
    "name": "post",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/banner"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"新增成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/banner.js",
    "groupTitle": "banner",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/banner/:id",
    "title": "更新某个指定资源的信息",
    "description": "<p>更新某个指定资源的信息</p>",
    "name": "put",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/banner/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/banner.js",
    "groupTitle": "banner",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "clear",
    "url": "/cart/clear",
    "title": "清空某个指定资源",
    "description": "<p>清空某个指定资源</p>",
    "name": "clear",
    "group": "cart",
    "sampleRequest": [
      {
        "url": "/api/cart/clear"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/cart.js",
    "groupTitle": "cart",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/cart/:id",
    "title": "删除某个指定资源",
    "description": "<p>删除某个指定资源</p>",
    "name": "delete",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/:id"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/cart.js",
    "groupTitle": "cart",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/cart/:id",
    "title": "获取某个指定资源的信息",
    "description": "<p>获取某个指定资源的信息</p>",
    "name": "get",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/cart/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/cart.js",
    "groupTitle": "cart",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/cart",
    "title": "列出所有资源",
    "description": "<p>列出所有资源</p>",
    "name": "getAll",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>指定第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>指定每页的记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>指定is_show过滤</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/cart"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/cart.js",
    "groupTitle": "cart",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/cart",
    "title": "新建一个资源",
    "description": "<p>新建一个资源</p>",
    "name": "post",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/cart"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"新增成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/cart.js",
    "groupTitle": "cart",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/cart/:id",
    "title": "更新某个指定资源的信息",
    "description": "<p>更新某个指定资源的信息</p>",
    "name": "put",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/cart/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/cart.js",
    "groupTitle": "cart",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/classify/:id",
    "title": "删除某个指定资源",
    "description": "<p>删除某个指定资源</p>",
    "name": "delete",
    "group": "classify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/classify/:id"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/classify.js",
    "groupTitle": "classify",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/classify/:id",
    "title": "获取某个指定资源的信息",
    "description": "<p>获取某个指定资源的信息</p>",
    "name": "get",
    "group": "classify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/classify/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"name\": \"name\",\n  \t\"remark\": \"remark\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/classify.js",
    "groupTitle": "classify",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/classify",
    "title": "列出所有资源",
    "description": "<p>列出所有资源</p>",
    "name": "getAll",
    "group": "classify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>指定第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>指定每页的记录数</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/classify"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"name\": \"name\",\n  \t\"remark\": \"remark\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/classify.js",
    "groupTitle": "classify",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/classify",
    "title": "新建一个资源",
    "description": "<p>新建一个资源</p>",
    "name": "post",
    "group": "classify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/classify"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"新增成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/classify.js",
    "groupTitle": "classify",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/classify/:id",
    "title": "更新某个指定资源的信息",
    "description": "<p>更新某个指定资源的信息</p>",
    "name": "put",
    "group": "classify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/classify/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"name\": \"name\",\n  \t\"remark\": \"remark\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/classify.js",
    "groupTitle": "classify",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/common/captcha/:width/:height",
    "title": "验证码",
    "description": "<p>验证码</p>",
    "name": "captcha",
    "group": "common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>宽度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>高度</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/common/captcha/:width/:height"
      }
    ],
    "version": "0.0.0",
    "filename": "controllers/common.js",
    "groupTitle": "common"
  },
  {
    "type": "post",
    "url": "/common/createwxaqrcode",
    "title": "接口B：适用于需要的码数量极多，或仅临时使用的业务场景",
    "description": "<p>接口B：适用于需要的码数量极多，或仅临时使用的业务场景</p>",
    "name": "createwxaqrcode",
    "group": "common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>不能为空，最大长度 128 字节</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>二维码的宽度</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/common/createwxaqrcode"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/common.js",
    "groupTitle": "common",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/common/file/:id",
    "title": "删除文件",
    "description": "<p>删除文件</p>",
    "name": "delFile",
    "group": "common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/common/file/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/common.js",
    "groupTitle": "common",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/common/getwxacode",
    "title": "接口A: 适用于需要的码数量较少的业务场景",
    "description": "<p>接口A: 适用于需要的码数量较少的业务场景</p>",
    "name": "getwxacode",
    "group": "common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>不能为空，最大长度 128 字节</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>二维码的宽度</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "auto_color",
            "description": "<p>自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "line_color",
            "description": "<p>auth_color 为 false 时生效，使用 rgb 设置颜色 例如 {&quot;r&quot;:&quot;xxx&quot;,&quot;g&quot;:&quot;xxx&quot;,&quot;b&quot;:&quot;xxx&quot;}</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/common/getwxacode"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/common.js",
    "groupTitle": "common",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/common/getwxacodeunlimit",
    "title": "接口B：适用于需要的码数量极多，或仅临时使用的业务场景",
    "description": "<p>接口B：适用于需要的码数量极多，或仅临时使用的业务场景</p>",
    "name": "getwxacodeunlimit",
    "group": "common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scene",
            "description": "<p>最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&amp;'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>二维码的宽度</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "auto_color",
            "description": "<p>自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "line_color",
            "description": "<p>auth_color 为 false 时生效，使用 rgb 设置颜色 例如 {&quot;r&quot;:&quot;xxx&quot;,&quot;g&quot;:&quot;xxx&quot;,&quot;b&quot;:&quot;xxx&quot;}</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/common/getwxacodeunlimit"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/common.js",
    "groupTitle": "common",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/common/sign/check",
    "title": "登录认证",
    "description": "<p>登录认证</p>",
    "name": "signCheck",
    "group": "common",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/common/sign/check"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/common.js",
    "groupTitle": "common",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/common/file",
    "title": "上传文件",
    "description": "<p>上传文件</p>",
    "name": "uploadFile",
    "group": "common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "files",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/common/file"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"上传成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"name\": \"name\",\n  \t\"path\": \"path\",\n  \t\"create_at\": \"create_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/common.js",
    "groupTitle": "common",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/goods/:id",
    "title": "删除某个指定资源",
    "description": "<p>删除某个指定资源</p>",
    "name": "delete",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/goods/:id"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/goods.js",
    "groupTitle": "goods",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/goods/:id",
    "title": "获取某个指定资源的信息",
    "description": "<p>获取某个指定资源的信息</p>",
    "name": "get",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/goods/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"name\": \"name\",\n  \t\"price\": \"price\",\n  \t\"remark\": \"remark\",\n  \t\"images\": \"images\",\n  \t\"types\": \"types\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/goods.js",
    "groupTitle": "goods",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/goods",
    "title": "列出所有资源",
    "description": "<p>列出所有资源</p>",
    "name": "getAll",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>指定第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>指定每页的记录数</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/goods"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"name\": \"name\",\n  \t\"price\": \"price\",\n  \t\"remark\": \"remark\",\n  \t\"images\": \"images\",\n  \t\"types\": \"types\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/goods.js",
    "groupTitle": "goods",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/goods",
    "title": "新建一个资源",
    "description": "<p>新建一个资源</p>",
    "name": "post",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "types",
            "description": "<p>分类</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/goods"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"新增成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/goods.js",
    "groupTitle": "goods",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/goods/:id",
    "title": "更新某个指定资源的信息",
    "description": "<p>更新某个指定资源的信息</p>",
    "name": "put",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "types",
            "description": "<p>分类</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/goods/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"name\": \"name\",\n  \t\"price\": \"price\",\n  \t\"remark\": \"remark\",\n  \t\"images\": \"images\",\n  \t\"types\": \"types\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/goods.js",
    "groupTitle": "goods",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "search",
    "url": "/goods/search/all",
    "title": "按关键词查询资源",
    "description": "<p>按关键词查询资源</p>",
    "name": "search",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键词</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/goods/search/all"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"num\": \"num\",\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/goods.js",
    "groupTitle": "goods",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/help/:id",
    "title": "删除某个指定资源",
    "description": "<p>删除某个指定资源</p>",
    "name": "delete",
    "group": "help",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/help/:id"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/help.js",
    "groupTitle": "help",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/help/:id",
    "title": "获取某个指定资源的信息",
    "description": "<p>获取某个指定资源的信息</p>",
    "name": "get",
    "group": "help",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/help/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"title\": \"title\",\n  \t\"content\": \"content\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/help.js",
    "groupTitle": "help",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/help",
    "title": "列出所有资源",
    "description": "<p>列出所有资源</p>",
    "name": "getAll",
    "group": "help",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>指定第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>指定每页的记录数</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/help"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"title\": \"title\",\n  \t\"content\": \"content\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/help.js",
    "groupTitle": "help",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/help",
    "title": "新建一个资源",
    "description": "<p>新建一个资源</p>",
    "name": "post",
    "group": "help",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/help"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"新增成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/help.js",
    "groupTitle": "help",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/help/:id",
    "title": "更新某个指定资源的信息",
    "description": "<p>更新某个指定资源的信息</p>",
    "name": "put",
    "group": "help",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/help/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"title\": \"title\",\n  \t\"content\": \"content\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/help.js",
    "groupTitle": "help",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "删除某个指定资源",
    "description": "<p>删除某个指定资源</p>",
    "name": "delete",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/:id"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"删除成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.js",
    "groupTitle": "order",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/order/:id",
    "title": "获取某个指定资源的信息",
    "description": "<p>获取某个指定资源的信息</p>",
    "name": "get",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/order/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.js",
    "groupTitle": "order",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/order",
    "title": "列出所有资源",
    "description": "<p>列出所有资源</p>",
    "name": "getAll",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>指定第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>指定每页的记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>指定is_show过滤</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/order"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": [{\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.js",
    "groupTitle": "order",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/order",
    "title": "新建一个资源",
    "description": "<p>新建一个资源</p>",
    "name": "post",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/order"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"新增成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.js",
    "groupTitle": "order",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/order/:id",
    "title": "更新某个指定资源的信息",
    "description": "<p>更新某个指定资源的信息</p>",
    "name": "put",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_show",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/order/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {\n  \t\"_id\": \"_id\",\n  \t\"images\": [{\n  \t\t\"_id\": \"_id\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"create_at\": \"create_at\"\n  \t}],\n  \t\"is_show\": \"is_show\",\n  \t\"remark\": \"remark\",\n  \t\"sort\": \"sort\",\n  \t\"title\": \"title\",\n  \t\"create_at\": \"create_at\",\n  \t\"update_at\": \"update_at\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.js",
    "groupTitle": "order",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/copy",
    "title": "复制文件",
    "description": "<p>复制文件</p>",
    "name": "copy",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>重命名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/copy"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/delete",
    "title": "删除文件",
    "description": "<p>删除文件</p>",
    "name": "delete",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/delete"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/download",
    "title": "下载文件",
    "description": "<p>下载文件</p>",
    "name": "download",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/download"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/image/exif",
    "title": "图片EXIF信息",
    "description": "<p>图片EXIF信息</p>",
    "name": "imageExif",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/image/exif"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/image/info",
    "title": "图片基本信息",
    "description": "<p>图片基本信息</p>",
    "name": "imageInfo",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/image/info"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"format\": \"format\",\n  \t\"width\": \"width\",\n  \t\"height\": \"height\",\n  \t\"colorModel\": \"colorModel\",\n  \t\"orientation\": \"orientation\",\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/image/mogr",
    "title": "高级图片处理（缩略、裁剪、旋转、转化）",
    "description": "<p>高级图片处理（缩略、裁剪、旋转、转化）</p>",
    "name": "imageMogr",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "opt",
            "description": "<p>配置参数</p> <ul> <li>{String} [thumbnail] 缩略图大小，详解见下</li> <li>{String} [gravity] 位置偏移，只会使其后的裁剪偏移({offset})受到影响，默认值为 NorthWest（左上角） 可选值：NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast</li> <li>{String} [crop] 裁剪大小和偏移，详解见下</li> <li>{Number} [quality] 图片质量，取值范围是[1, 100]</li> <li>{Number} [rotate] 旋转角度</li> <li>{String} [format] 输出格式，可选为jpg, gif, png, bmp, tiff, webp等</li> </ul>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/image/mogr"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/image/view",
    "title": "生成缩略图",
    "description": "<p>生成缩略图</p>",
    "name": "imageView",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "opt",
            "description": "<p>配置参数</p> <ul> <li>{Number} mode <ul> <li>mode=1  表示限定目标缩略图的宽度和高度，放大并从缩略图中央处裁剪为指定 Width x Height 大小的图片</li> <li>mode=2  指定 Width 和 Height，表示限定目标缩略图的长和宽，将缩略图的大小限定在指定的宽高矩形内</li> <li>mode=2  指定 Width 但不指定 Height，表示限定目标缩略图的宽度，高度等比缩略自适应</li> <li>mode=2  指定 Height 但不指定 Width，表示限定目标缩略图的高度，宽度等比缩略自适应</li> </ul> </li> <li>{Number} width 宽度</li> <li>{Number} height 高度</li> <li>{Number} [q] 质量</li> <li>{String} [format] 指定目标缩略图的输出格式，取值范围：jpg, gif, png, webp 等图片格式</li> </ul>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/image/view"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/list",
    "title": "列出所有文件",
    "description": "<p>列出所有文件</p>",
    "name": "list",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "opt",
            "description": "<p>配置参数</p> <ul> <li>{String} prefix 指定要过滤出来的前缀，默认 '/'</li> <li>{String} marker 为服务器上次导出时返回的标记，没有可以不填</li> <li>{String} limit 单次查询返回的最大条目数，最大不超过1000</li> </ul>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/list"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"marker\": \"marker\",\n  \t\"items\": [{\n  \t\t\"key\": \"key\",\n  \t\t\"hash\": \"hash\",\n  \t\t\"fsize\": \"fsize\",\n  \t\t\"mimeType\": \"mimeType\",\n  \t\t\"putTime\": \"putTime\",\n  \t}]\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/md2html",
    "title": "Markdown转HTML",
    "description": "<p>Markdown转HTML</p>",
    "name": "md2html",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "opt",
            "description": "<p>配置参数</p> <ul> <li>{Number} mode 0 表示转为完整的 HTML(head+body) 输出; 1 表示只转为HTML Body，缺省值：0</li> <li>{String} css CSS 样式的URL</li> </ul>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/md2html"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/move",
    "title": "移动文件",
    "description": "<p>移动文件</p>",
    "name": "move",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>重命名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/move"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/qrcode",
    "title": "生成二维码",
    "description": "<p>生成二维码</p>",
    "name": "qrcode",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "mode",
            "defaultValue": "0",
            "description": "<p>可选值0或1，0表示以当前url生成二维码，1表示以当前URL中的数据生成二维码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "level",
            "defaultValue": "L",
            "description": "<p>冗余度，可选值 L、M、Q、H</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/qrcode"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": \"data\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/saveAsURL",
    "title": "保存文件",
    "description": "<p>保存文件</p>",
    "name": "saveAsURL",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>重命名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/saveAsURL"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": \"data\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/stat",
    "title": "文件信息",
    "description": "<p>文件信息</p>",
    "name": "stat",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/stat"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {\n  \t\"fsize\": \"fsize\",\n  \t\"hash\": \"hash\",\n  \t\"mimeType\": \"mimeType\",\n  \t\"putTime\": \"putTime\",\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/upload",
    "title": "上传文件",
    "description": "<p>上传文件</p>",
    "name": "upload",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/upload"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"上传成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/qiniu/image/watermark",
    "title": "图片水印（图片、文字）",
    "description": "<p>图片水印（图片、文字）</p>",
    "name": "watermark",
    "group": "qiniu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "opt",
            "description": "<p>配置参数</p> <ul> <li>{Number} mode <ul> <li>mode=1 时，表示图片水印：</li> <li>mode=2 时，表示文字水印：</li> </ul> </li> <li>{String} image 水印图片，使用图片水印时需指定用于水印的远程图片URL。EncodedImageURL = urlsafe_base64_encode(ImageURL)</li> <li>{String} text 水印文本，文字水印时必须。EncodedText = urlsafe_base64_encode(Text)</li> <li>{String} [font] 字体名，若水印文本为非英文字符（比如中文）构成，则必须。EncodedFontName = urlsafe_base64_encode(FontName)</li> <li>{Number} [fontsize] 字体大小，0 表示默认，单位: 缇，等于 1⁄20 磅</li> <li>{String} [fill] 字体颜色。EncodedTextColor = urlsafe_base64_encode(TextColor) RGB格式，可以是颜色名称（比如 red）或十六进制（比如 #FF0000）， 参考 <a href=\"http://www.rapidtables.com/web/color/RGB_Color.htm\">RGB颜色编码表</a></li> <li>{Number} [dissolve] 透明度，取值范围 1-100，默认值 100，即表示 100%（不透明）</li> <li>{String} [gravity] 位置，默认值为 SouthEast（右下角） 可选值：NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast</li> <li>{Number} [dx] 横向边距，单位：像素（px），默认值为 10</li> <li>{Number} [dy] 纵向边距，单位：像素（px），默认值为 10</li> </ul>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/qiniu/image/watermark"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/qiniu.js",
    "groupTitle": "qiniu",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/info",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "getInfo",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/info"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"调用成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/reset/password",
    "title": "修改密码",
    "description": "<p>修改密码</p>",
    "name": "resetPassword",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpwd",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpwd",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/reset/password"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/info",
    "title": "保存用户信息",
    "description": "<p>保存用户信息</p>",
    "name": "saveInfo",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/info"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"更新成功\"\n  },\n  \"data\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/sign/in",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "signIn",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/sign/in"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"登录成功\"\n  },\n  \"data\": {\n  \t\"token\": \"token\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/sign/out",
    "title": "用户登出",
    "description": "<p>用户登出</p>",
    "name": "signOut",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/sign/out"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"登出成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jsonwebtoken</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/sign/up",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "signUp",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/sign/up"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"注册成功\"\n  },\n  \"data\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/wechat/decrypt/data",
    "title": "微信用户信息的数据解密",
    "description": "<p>微信用户登录</p>",
    "name": "wechatDecryptData",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>登录凭证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "encryptedData",
            "description": "<p>包括敏感数据在内的完整用户信息的加密数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iv",
            "description": "<p>加密算法的初始向量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rawData",
            "description": "<p>不包括敏感信息的原始数据字符串，用于计算签名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/wechat/decrypt/data"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"登录成功\"\n  },\n  \"data\": {\n  \t\"token\": \"token\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/wechat/sign/in",
    "title": "微信用户登录",
    "description": "<p>微信用户登录</p>",
    "name": "wechatSignIn",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>登录凭证</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/wechat/sign/in"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"登录成功\"\n  },\n  \"data\": {\n  \t\"token\": \"token\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/wechat/sign/up",
    "title": "微信用户注册",
    "description": "<p>微信用户注册</p>",
    "name": "wechatSignUp",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>登录凭证</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/user/wechat/sign/up"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"meta\": {\n  \t\"code\": 0,\n  \t\"message\": \"注册成功\"\n  },\n  \"data\": {\n  \t\"token\": \"token\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>状态描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.code",
            "description": "<p>标识码，0表示成功，1表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.message",
            "description": "<p>标识信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user"
  }
] });
