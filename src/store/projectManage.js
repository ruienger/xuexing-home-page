import {
  queryByTarget,
  saveOrUpdate,
  deleteById,
  queryAll
} from '@/utils/dataHandler'
// 该store用来存储项目信息与操作数据的方法
import {
  MessageBox
} from 'element-ui';
import {
  queryPage
} from '../utils/dataHandler';

const state = {
  // 栏目ID为 9441 的子产品
  projects9441: [],
  // 栏目ID为 9425 的子产品
  projects9425: [],
  // 栏目ID为 9414 的子产品
  projects9414: [],
  // 栏目ID为 9440 的子产品
  projects9440: [],
  // 栏目ID为 9432 的子产品
  projects9432: [],
  // 栏目ID为 9411 的子产品
  projects9411: [],
  //  子产品分页后的数组
  pagedProjects9411: [],
  // 产品总数
  total: 0,
  // 所有产品
  allProjects: {}
}

const mutations = {
  SET_PROJECTS9441(state, projects9441) {
    state.projects9441 = projects9441
  },
  SET_PROJECTS9425(state, projects9425) {
    state.projects9425 = projects9425
  },
  SET_PROJECTS9414(state, projects9414) {
    state.projects9414 = projects9414
  },
  SET_PROJECTS9440(state, projects9440) {
    state.projects9440 = projects9440
  },
  SET_PROJECTS9432(state, projects9432) {
    state.projects9432 = projects9432
  },
  SET_PROJECTS9411(state, projects9411) {
    state.projects9411 = projects9411
  },
  SET_TOTAL(state, total) {
    state.total = total
  },
  SET_PAGEDPROJECTS9411(state, pagedProjects9411) {
    state.pagedProjects9411 = pagedProjects9411
  },
  SET_PROJECTSALL(state, allProjects) {
    state.allProjects = allProjects
  }
}

const actions = {
  // 请求 所有项目数据
  queryAllProjects({
    commit
  }) {
    queryAll('/product/findAll', (res) => {
      commit('SET_PROJECTSALL', res)
    })
  },
  // 请求全部项目数据，分页由 工具类 utils 中的 pageHelper 来做
  queryProject({
    commit
  }, id) {
    // 获取栏目为 9411 的产品作为项目展示 res为返回的data数组
    queryByTarget('/product/findByCategoryId', {
      id
    }, (res) => {
      if (id == 9411) {
        res.forEach(element => {
          if (element.photo) {
            console.log(JSON.parse(element.photo))
            if (JSON.parse(element.photo)) {
              element.photo = JSON.parse(element.photo)
            }
          }
        });
      }
      commit('SET_PROJECTS' + id, res)
      // 提交mutations
      commit('SET_TOTAL', res.length)
    })
  },
  // 请求各个 栏目 的数据
  // 更新项目数据
  // 参数 项目数据、用户数据、地址数据
  updateProject({
    dispatch
  }, {
    project,
    customer,
    address,
    content
  }) {
    // 首先 获取用户的 id
    finder({
      urlFind: 'customer/query',
      urlSave: 'customer/saveOrUpdate',
      get: false,
      target: {
        page: 0,
        pageSize: 1,
        telephone: customer.telephone
      },
      data: customer,
      isOrigin: true
    }, (cus, isOrigin) => {
      // 用户id已获取, isOrigin 判断是否为原本就存在的数据
      // 若存在，则提示用户已存在，确定下一步
      if (isOrigin) {
        MessageBox.confirm('用户手机号已存在，是否使用新的信息报名？', '用户已存在', {
          confirmButtonText: '使用新信息',
          cancelButtonText: '使用已有信息',
          distinguishCancelAndClose: true,
          callback: async (action) => {
            address.customerId = cus.id
            switch (action) {
              case 'cancel':
                // 点击使用已有信息，直接下一步
                // 获取地址信息

                finder({
                  urlFind: 'address/findByCustomerId',
                  get: true,
                  urlSave: 'address/saveOrUpdate',
                  target: {
                    id: cus.id
                  },
                  data: address,
                  isOrigin: true
                }, (address, isOrigin) => {
                  // 拿到地址之后获取 id，将 地址 id 和 用户 id 与 project 一并新建一个订单
                  saveOrder(cus.id, address.id, project, content, (m) => {
                    MessageBox.alert(m, '提示')
                  })
                })
                break
              case 'close':
                break
              case 'confirm':
                // 更新后再下一步
                cus.realname = customer.realname
                cus.province = customer.province
                cus.city = customer.city
                cus.area = customer.area
                cus.address = customer.address
                saveOrUpdate('customer/saveOrUpdate', cus, (res) => {
                  finder({
                    urlFind: 'address/findByCustomerId',
                    get: true,
                    urlSave: 'address/saveOrUpdate',
                    target: {
                      id: cus.id
                    },
                    data: address,
                    isOrigin: true
                  }, (add, isOrigin) => {
                    add.province = address.province
                    add.city = address.city
                    add.area = address.area
                    add.address = address.address
                    saveOrUpdate('address/saveOrUpdate', add, (res) => {
                      saveOrder(cus.id, add.id, project, content, (m) => {
                        MessageBox.alert(m, '提示')
                      })
                    })
                    // 拿到地址之后获取 id，将 地址 id 和 用户 id 与 project 一并新建一个订单
                  })
                })
                break
            }
          }
        })
      } /* 若原本不存在 */
      else {
        address.customerId = cus.id
        finder({
          urlFind: 'address/findByCustomerId',
          get: true,
          urlSave: 'address/saveOrUpdate',
          target: {
            id: cus.id
          },
          data: address,
          isOrigin: true
        }, (address, isOrigin) => {
          // 拿到地址之后获取 id，将 地址 id 和 用户 id 与 project 一并新建一个订单
          saveOrder(cus.id, address.id, project, content, (m) => {
            MessageBox.alert(m, '提示')
          })
        })
      }

    })
  },
  updateComment({
    commit
  }, {
    cus,
    content
  }) {
    finder({
      urlFind: 'customer/query',
      urlSave: 'customer/saveOrUpdate',
      get: false,
      data: cus,
      target: {
        page: 0,
        pageSize: 2,
        telephone: cus.telephone
      },
      isOrigin: true
    }, (customer) => {
      let comment = {}
      comment.cusId = customer.id
      comment.content = content
      saveOrUpdate('comment/saveOrUpdate', comment, (res) => {
        MessageBox.alert('提交成功，我们会尽快和您取得联系', '提示')
      })
    })
  },
  //删除项目数据
  deleteProject({
    dispatch
  }, {
    id,
    cateId
  }) {
    deleteById('/product/deleteById', id, (res) => {
      dispatch('queryProject', cateId)
    })
  }
}

// 这个函数用来寻找 指定的id是否存在最终返回 id
// 参数 urlFind 用于查找的url
// 参数 urlSave 用户更新的url
// 参数 target 用于查找的条件，一般以手机号 telephone 查找
// 参数 data 用于更新的数据
// 参数 isOrigin 用于判断是否为原本存在的数据
// 参数 callback 回调函数，它的参数为找到的 本体
function finder({
  urlFind,
  urlSave,
  target,
  data,
  get,
  isOrigin
}, callback) {
  get ? queryByTarget(urlFind, target, (res) => {
    // 找到的话
    if (res[0]) {
      callback(res[0], isOrigin)
    } else {
      // 没找到那就新增然后重新找
      saveOrUpdate(urlSave, data, (res) => {
        finder({
          urlFind,
          urlSave,
          target,
          data,
          get,
          isOrigin: false
        }, callback)
      })
    }
  }) :
    queryPage(urlFind, target, (res) => {
      // 找到的话
      if (res.list[0]) {
        callback(res.list[0], isOrigin)
      } else {
        // 没找到那就新增然后重新找
        saveOrUpdate(urlSave, data, (res) => {
          finder({
            urlFind,
            urlSave,
            target,
            data,
            get,
            isOrigin: false
          }, callback)
        })
      }
    })
}

function finderArr({
  urlFind,
  urlSave,
  target,
  data,
  get,
  isOrigin
}, callback) {
  get ? queryByTarget(urlFind, target, (res) => {
    // 找到的话
    if (res) {
      callback(res, isOrigin)
    } else {
      // 没找到那就新增然后重新找
      saveOrUpdate(urlSave, data, (res) => {
        finder({
          urlFind,
          urlSave,
          target,
          data,
          get,
          isOrigin: false
        }, callback)
      })
    }
  }) :
    queryPage(urlFind, target, (res) => {
      // 找到的话
      if (res.list) {
        callback(res.list, isOrigin)
      } else {
        // 没找到那就新增然后重新找
        saveOrUpdate(urlSave, data, (res) => {
          finder({
            urlFind,
            urlSave,
            target,
            data,
            get,
            isOrigin: false
          }, callback)
        })
      }
    })
}

function saveOrder(cusId, addId, project, content, callback) {
  // 判断cusId 锁定的订单中有没有 project ，若有则 onerrer，没有则 save之后 onsuc
  finderArr({
    urlFind: 'order/query',
    get: true,
    urlSave: 'order/save',
    target: {
      customerId: cusId
    },
    data: {
      'orderLines[0].number': 1,
      'orderLines[0].price': 500000,
      'orderLines[0].productId': project.id,
      customerId: cusId,
      addressId: addId
    },
    isOrigin: true
  }, (order, isOrigin) => {
    let arr = order.filter(i => {
      return i.orderLines[0].productId != project.id
    })
    if (arr.length == 0) {
      finder({
        urlFind: 'order/queryBasic',
        urlSave: 'order/save',
        target: {
          customerId: cusId
        },
        data: {
          'orderLines[0].number': 1,
          'orderLines[0].price': 500000,
          'orderLines[0].productId': project.id,
          customerId: cusId,
          addressId: addId
        },
        get: true,
        isOrigin: true
      }, (res) => {
        saveOrUpdate('comment/saveOrUpdate', {
          orderId: res.orderId,
          cusId,
          content
        }, (res) => {
          // console.log(res)
          callback('报名成功')
        })

      })
    } else {
      callback('您已经报名过游学计划了，请等待工作人员联系')
    }
  })
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}