import { Client, registry, MissingWalletError } from 'mun-client-ts'

import { Minter } from "mun-client-ts/cosmos.mint.v1beta1/types"
import { Params } from "mun-client-ts/cosmos.mint.v1beta1/types"


export { Minter, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				Inflation: {},
				AnnualProvisions: {},
				
				_Structure: {
						Minter: getStructure(Minter.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getInflation: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Inflation[JSON.stringify(params)] ?? {}
		},
				getAnnualProvisions: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AnnualProvisions[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: cosmos.mint.v1beta1 initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosMintV1Beta1.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryInflation({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosMintV1Beta1.query.queryInflation()).data
				
					
				commit('QUERY', { query: 'Inflation', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryInflation', payload: { options: { all }, params: {...key},query }})
				return getters['getInflation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryInflation API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAnnualProvisions({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosMintV1Beta1.query.queryAnnualProvisions()).data
				
					
				commit('QUERY', { query: 'AnnualProvisions', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAnnualProvisions', payload: { options: { all }, params: {...key},query }})
				return getters['getAnnualProvisions']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAnnualProvisions API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
	}
}
