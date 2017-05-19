import { expect } from 'chai'
import ActionReducerFactory from '../src/index'

const dispatch = (done, expectation) => result => {
  
  return done()
}

describe('Action creators', () => {
  describe('Basic operation', () => {
    const factory = new ActionReducerFactory({})
    const actions = factory.createActions('/api/users', 'User', 'Users')

    it('should create reflexive actions', () => {
      const reflexiveActions = [
        'READ_USERS',
        'USERS_READ',
        'USERS_READ_FAIL',

        'CREATE_USER',
        'USER_CREATE',
        'USER_CREATE_FAIL',

        'READ_USER',
        'USER_READ',
        'USER_READ_FAIL',

        'UPDATE_USER',
        'USER_UPDATE',
        'USER_UPDATE_FAIL',

        'DELETE_USER',
        'USER_DELETE',
        'USER_DELETE_FAIL'
      ]

      reflexiveActions.forEach(action => {
        expect(actions[action]).to.equal(action)
      })
    })

    describe('functional actions', () => {
      describe('plural read', () => {
        it('should dispatch plural read', done => {
          let user = { id: 1 }
          actions.readUsers()(action => {
            expect(action.type).to.equal('READ_USERS')
            done()
          })
        })
      })
    })
  })
})
