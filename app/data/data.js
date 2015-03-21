'use strict';

angular.module('myApp.data', [])

  .factory('mainData',function(){
    return [
      {
        //=============================================================
        //塔能力 1
        //=============================================================
        id: 1001,
        name: 'アルター・アルマ',
        prop: {
          hp: 30,
          p_atk: 20
        },
        category: '塔',
        inherit: 3,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 1002,
        name: 'アルター・ティロ',
        prop: {
          hp: 30,
          s_atk: 20
        },
        category: '塔',
        inherit: 3,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 1003,
        name: 'アルター・マギア',
        prop: {
          hp: 30,
          m_atk: 20
        },
        category: '塔',
        inherit: 3,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 1004,
        name: 'フリクト・アルマ',
        prop: {
          pp: 3,
          p_atk: 20
        },
        category: '塔',
        inherit: 3,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 1005,
        name: 'フリクト・ティロ',
        prop: {
          pp: 3,
          s_atk: 20
        },
        category: '塔',
        inherit: 3,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 1006,
        name: 'フリクト・マギア',
        prop: {
          pp: 3,
          m_atk: 20
        },
        category: '塔',
        inherit: 3,
        combine: false,
        increase: null,
        increased: null
      },
      //=============================================================
      //魂能力 2
      //=============================================================
      {
        id: 2001,
        name: 'アンガ・ソール',
        prop: {
          pp: 4,
          p_atk: 20,
          s_atk: 20,
          m_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2002,
        name: 'ヴァーダー・ソール',
        prop: {
          pp: 4,
          s_def: 30,
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2003,
        name: 'ヴォル・ソール',
        prop: {
          hp: 20,
          p_atk: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2004,
        name: 'ウォルガ・ソール',
        prop: {
          hp: 10,
          pp: 2,
          m_atk: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2005,
        name: 'エクス・ソール',
        prop: {
          pp: 4,
          p_def: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2006,
        name: 'エルダー・ソール',
        prop: {
          pp: 3,
          m_atk: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2007,
        name: 'オルグ・ソール',
        prop: {
          hp: 10,
          p_atk: 20,
          s_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2008,
        name: 'キャタ・ソール',
        prop: {
          hp: 20,
          pp: 1,
          m_def: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2009,
        name: 'クーガー・ソール',
        prop: {
          hp: 10,
          pp: 2,
          p_atk: 15,
          s_atk: 15,
          m_atk: 15,
          arm: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2010,
        name: 'クォーツ・ソール',
        prop: {
          pp: 3,
          p_atk: 30,
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2011,
        name: 'クローム・ソール',
        prop: {
          hp: 10,
          pp: 3,
          arm: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2012,
        name: 'グワナ・ソール',
        prop: {
          hp: 10,
          pp: 2,
          p_atk: 30,
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2013,
        name: 'グンネ・ソール',
        prop: {
          hp: 45,
          p_atk: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2014,
        name: 'ゴロン・ソール',
        prop: {
          pp: 4,
          m_def: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2015,
        name: 'ジオーグ・ソール',
        prop: {
          hp: 20,
          pp: 1,
          s_atk: 35,
          arm: 5
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2016,
        name: 'シグノ・ソール',
        prop: {
          hp: 20,
          pp: 1,
          arm: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2017,
        name: 'ジャドゥ・ソール',
        prop: {
          hp: 45,
          m_atk: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2018,
        name: 'シュレイダ・ソール',
        prop: {
          hp: 10,
          pp: 3,
          m_def: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2019,
        name: 'スノウ・ソール',
        prop: {
          hp: 20,
          pp: 1,
          p_def: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2020,
        name: 'ソーマ・ソール',
        prop: {
          pp: 2,
          p_atk: 20,
          s_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2021,
        name: 'タガミカヅチ・ソール',
        prop: {
          pp: 2,
          s_atk: 20,
          m_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2022,
        name: 'ディアボ・ソール',
        prop: {
          hp: 30,
          m_atk: 35,
          arm: 5
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2023,
        name: 'ナイトギア・ソール',
        prop: {
          pp: 4,
          p_atk: 15,
          s_atk: 15,
          m_atk: 15,
          arm: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2024,
        name: 'ニャウ・ソール',
        prop: {
          pp: 4,
          arm: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2025,
        name: 'ネプト・ソール',
        prop: {
          pp:4,
          m_atk: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2026,
        name: 'バル・ソール',
        prop: {
          hp: 10,
          s_atk: 20,
          m_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2027,
        name: 'ビブラス・ソール',
        prop: {
          hp: 5,
          pp: 1,
          s_atk: 20,
          m_atk: 20          
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2028,
        name: 'ファング・ソール',
        prop: {
          hp: 10,
          pp: 2,
          s_atk: 30   
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2029,
        name: 'ベーアリ・ソール',
        prop: {
          pp: 3,
          p_atk: 35,
          arm: 5
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2030,
        name: 'ペルソナ・ソール',
        prop: {
          hp: 10,
          pp: 3,
          s_def: 30        
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2031,
        name: 'マイザー・ソール',
        prop: {
          pp: 3,
          s_atk: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2032,
        name: 'マガツ・ソール',
        prop: {
          hp: 30,
          pp: 3,
          p_def: 15,
          s_def: 15,
          m_def: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2033,
        name: 'マドゥ・ソール',
        prop: {
          pp: 4,
          s_atk: 15
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2034,
        name: 'マリューダ・ソール',
        prop: {
          pp: 2,
          p_atk: 20,
          m_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2035,
        name: 'マルモ・ソール',
        prop: {
          hp: 20,
          pp: 1,
          s_def: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2036,
        name: 'メデューナ・ソール',
        prop: {
          hp: 5,
          pp: 1,
          p_def: 20,
          s_def: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2037,
        name: 'ラグネ・ソール',
        prop: {
          hp: 20,
          m_atk: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2038,
        name: 'ラッピー・ソール',
        prop: {
          pp: 4,
          arm: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2039,
        name: 'ランサ・ソール',
        prop: {
          hp: 20,
          s_atk: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2040,
        name: 'リーリー・ソール',
        prop: {
          hp: 20,
          p_atk: 20,
          p_def: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2041,
        name: 'リンガ・ソール',
        prop: {
          hp: 10,
          p_atk: 20,
          m_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2042,
        name: 'ルーサー・ソール',
        prop: {
          hp: 5,
          pp: 1,
          p_atk: 20,
          m_atk: 20
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 2043,
        name: 'ロックベア・ソール',
        prop: {
          hp: 10,
          pp: 3,
          p_def: 30
        },
        category: '魂',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      //=============================================================
      //状态加成类能力 3
      //=============================================================

      {
        id: 3001,
        name: 'スタミナⅠ',
        sub: 'stamina',
        level: 1,
        prop: {
          hp: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3002,
        name: 'スタミナⅡ',
        sub: 'stamina',
        level: 2,
        prop: {
          hp: 40
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3003,
        name: 'スタミナⅢ',
        sub: 'stamina',
        level: 3,
        prop: {
          hp: 50
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3004,
        name: 'スタミナⅣ',
        sub: 'stamina',
        level: 4,
        prop: {
          hp: 60
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3005,
        name: 'スタミナⅤ',
        sub: 'stamina',
        level: 5,
        prop: {
          hp: 70
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3006,
        name: 'スピリタⅠ',
        sub: 'spirit',
        level: 1,
        prop: {
          pp: 2
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3007,
        name: 'スピリタⅡ',
        sub: 'spirit',
        level: 2,
        prop: {
          pp: 3
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3008,
        name: 'スピリタⅢ',
        sub: 'spirit',
        level: 3,
        prop: {
          pp: 4
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3009,
        name: 'スピリタⅣ',
        sub: 'spirit',
        level: 4,
        prop: {
          pp: 5
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3010,
        name: 'スピリタⅤ',
        sub: 'spirit',
        level: 5,
        prop: {
          pp: 6
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3011,
        name: 'アームⅠ',
        sub: 'arm',
        level: 1,
        prop: {
          arm: 10
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3012,
        name: 'アームⅡ',
        sub: 'arm',
        level: 2,
        prop: {
          arm: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3013,
        name: 'アームⅢ',
        sub: 'arm',
        level: 3,
        prop: {
          arm: 30
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3014,
        name: 'アームⅣ',
        sub: 'arm',
        level: 4,
        prop: {
          arm: 35
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3015,
        name: 'アームⅤ',
        sub: 'arm',
        level: 5,
        prop: {
          arm: 40
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3016,
        name: 'パワーⅠ',
        sub: 'power',
        level: 1,
        prop: {
          p_atk: 10
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3017,
        name: 'パワーⅡ',
        sub: 'power',
        level: 2,
        prop: {
          p_atk: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3018,
        name: 'パワーⅢ',
        sub: 'power',
        level: 3,
        prop: {
          p_atk: 30
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3019,
        name: 'パワーⅣ',
        sub: 'power',
        level: 4,
        prop: {
          p_atk: 35
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3020,
        name: 'パワーⅤ',
        sub: 'power',
        level: 5,
        prop: {
          p_atk: 40
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3021,
        name: 'シュートⅠ',
        sub: 'shoot',
        level: 1,
        prop: {
          s_atk: 10
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3022,
        name: 'シュートⅡ',
        sub: 'shoot',
        level: 2,
        prop: {
          s_atk: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3023,
        name: 'シュートⅢ',
        sub: 'shoot',
        level: 3,
        prop: {
          s_atk: 30
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3024,
        name: 'シュートⅣ',
        sub: 'shoot',
        level: 4,
        prop: {
          s_atk: 35
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3025,
        name: 'シュートⅤ',
        sub: 'shoot',
        level: 5,
        prop: {
          s_atk: 40
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3026,
        name: 'テテクニックⅠ',
        sub: 'technic',
        level: 1,
        prop: {
          m_atk: 10
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3027,
        name: 'テクニックⅡ',
        sub: 'technic',
        level: 2,
        prop: {
          m_atk: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3028,
        name: 'テクニックⅢ',
        sub: 'technic',
        level: 3,
        prop: {
          m_atk: 30
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3029,
        name: 'テクニックⅣ',
        sub: 'technic',
        level: 4,
        prop: {
          m_atk: 35
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3030,
        name: 'テクニックⅤ',
        sub: 'technic',
        level: 5,
        prop: {
          m_atk: 40
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3031,
        name: 'ボディⅠ',
        sub: 'body',
        level: 1,
        prop: {
          p_def: 10
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3032,
        name: 'ボディⅡ',
        sub: 'body',
        level: 2,
        prop: {
          p_def: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3033,
        name: 'ボディⅢ',
        sub: 'body',
        level: 3,
        prop: {
          p_def: 30
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3034,
        name: 'ボディⅣ',
        sub: 'body',
        level: 4,
        prop: {
          p_def: 35
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3035,
        name: 'ボディⅤ',
        sub: 'body',
        level: 5,
        prop: {
          p_def: 40
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3036,
        name: 'リアクトⅠ',
        sub: 'react',
        level: 1,
        prop: {
          s_def: 10
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3037,
        name: 'リアクトⅡ',
        sub: 'react',
        level: 2,
        prop: {
          s_def: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3038,
        name: 'リアクトⅢ',
        sub: 'react',
        level: 3,
        prop: {
          s_def: 30
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3039,
        name: 'リアクトⅣ',
        sub: 'react',
        level: 4,
        prop: {
          s_def: 35
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3040,
        name: 'リアクトⅤ',
        sub: 'react',
        level: 5,
        prop: {
          s_def: 40
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3041,
        name: 'マインドⅠ',
        sub: 'mind',
        level: 1,
        prop: {
          m_def: 10
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3042,
        name: 'マインドⅡ',
        sub: 'mind',
        level: 2,
        prop: {
          m_def: 20
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3043,
        name: 'マインドⅢ',
        sub: 'mind',
        level: 3,
        prop: {
          m_def: 30
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3044,
        name: 'マインドⅣ',
        sub: 'mind',
        level: 4,
        prop: {
          m_def: 35
        },
        category: '状态',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 3045,
        name: 'マインドⅤ',
        sub: 'mind',
        level: 5,
        prop: {
          m_def: 40
        },
        category: '状态',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },
      //=============================================================
      //其他状态加成类能力
      //=============================================================

      {
        id: 4001,
        name: 'ミューテーションⅠ',
        sub: 'mutation',
        level: 1,
        prop: {
          hp: 10,
          p_atk: 10,
          s_atk: 10,
          m_atk: 10
        },
        category: '其他',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 4002,
        name: 'ウィンクルム',
        level: 0,
        prop: {
          p_atk: 20,
          s_atk: 20,
          m_atk: 20
        },
        category: '其他',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 4003,
        name: 'スティグマ',
        level: 0,
        prop: {
          pp: 5,
          arm: 20
        },
        category: '其他',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 4004,
        name: 'モデュレイター',
        level: 0,
        prop: {
          p_atk: 30,
          s_atk: 30,
          m_atk: 30
        },
        category: '其他',
        inherit: 2,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 4005,
        name: 'アビリティⅠ',
        level: 1,
        prop: {
          p_atk: 5,
          s_atk: 5,
          m_atk: 5,
          arm: 5,
          p_def: 5,
          s_def: 5,
          m_def: 5
        },
        category: '其他',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4006,
        name: 'アビリティⅡ',
        level: 2,
        prop: {
          p_atk: 10,
          s_atk: 10,
          m_atk: 10,
          arm: 10,
          p_def: 10,
          s_def: 10,
          m_def: 10
        },
        category: '其他',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4007,
        name: 'アビリティⅢ',
        level: 3,
        prop: {
          p_atk: 15,
          s_atk: 15,
          m_atk: 15,
          arm: 15,
          p_def: 15,
          s_def: 15,
          m_def: 15
        },
        category: '其他',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 4010,
        name: 'リターナーⅠ',
        sub: 'returner',
        level: 1,
        prop: {
          hp: 3,
          pp: 1,
          p_atk: 3,
          s_atk: 3,
          m_atk: 3,
          arm: 3,
          p_def: 3,
          s_def: 3,
          m_def: 3
        },
        category: '其他',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4011,
        name: 'リターナーⅡ',
        sub: 'returner',
        level: 2,
        prop: {
          hp: 5,
          pp: 2,
          p_atk: 5,
          s_atk: 5,
          m_atk: 5,
          arm: 5,
          p_def: 5,
          s_def: 5,
          m_def: 5
        },
        category: '其他',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4012,
        name: 'リターナーⅢ',
        sub: 'returner',
        level: 3,
        prop: {
          hp: 10,
          pp: 3,
          p_atk: 10,
          s_atk: 10,
          m_atk: 10,
          arm: 10,
          p_def: 10,
          s_def: 10,
          m_def: 10
        },
        category: '其他',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4013,
        name: 'リターナーⅣ',
        sub: 'returner',
        level: 4,
        prop: {
          hp: 15,
          pp: 4,
          p_atk: 15,
          s_atk: 15,
          m_atk: 15,
          arm: 15,
          p_def: 15,
          s_def: 15,
          m_def: 15
        },
        category: '其他',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4014,
        name: 'リターナーⅤ',
        sub: 'returner',
        level: 5,
        prop: {
          hp: 30,
          pp: 5,
          p_atk: 30,
          s_atk: 30,
          m_atk: 30,
          arm: 30,
          p_def: 30,
          s_def: 30,
          m_def: 30
        },
        category: '其他',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      //=============================================================
      //抗性加成类能力 5
      //=============================================================

      {
        id: 5001,
        name: 'ブロウレジストⅠ',
        sub: 'blowResist',
        level: 1,
        prop: {
          p_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5002,
        name: 'ブロウレジストⅡ',
        sub: 'blowResist',
        level: 2,
        prop: {
          p_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5003,
        name: 'ブロウレジストⅢ',
        sub: 'blowResist',
        level: 3,
        prop: {
          p_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5004,
        name: 'ブロウレジストⅣ',
        sub: 'blowResist',
        level: 4,
        prop: {
          p_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5005,
        name: 'ブロウレジストⅤ',
        sub: 'blowResist',
        level: 5,
        prop: {
          p_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5006,
        name: 'ショットレジストⅠ',
        sub: 'shotResist',
        level: 1,
        prop: {
          s_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5007,
        name: 'ショットレジストⅡ',
        sub: 'shotResist',
        level: 2,
        prop: {
          s_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5008,
        name: 'ショットレジストⅢ',
        sub: 'shotResist',
        level: 3,
        prop: {
          s_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5009,
        name: 'ショットレジストⅣ',
        sub: 'shotResist',
        level: 4,
        prop: {
          s_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5010,
        name: 'ショットレジストⅤ',
        sub: 'shotResist',
        level: 5,
        prop: {
          s_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5011,
        name: 'マインドレジストⅠ',
        sub: 'mindResist',
        level: 1,
        prop: {
          m_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5012,
        name: 'マインドレジストⅡ',
        sub: 'mindResist',
        level: 2,
        prop: {
          m_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5013,
        name: 'マインドレジストⅢ',
        sub: 'mindResist',
        level: 3,
        prop: {
          m_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5014,
        name: 'マインドレジストⅣ',
        sub: 'mindResist',
        level: 4,
        prop: {
          m_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5015,
        name: 'マインドレジストⅤ',
        sub: 'mindResist',
        level: 5,
        prop: {
          m_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 5016,
        name: 'フレイムレジストⅠ',
        sub: 'flameResist',
        level: 1,
        prop: {
          flame_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5017,
        name: 'フレイムレジストⅡ',
        sub: 'flameResist',
        level: 2,
        prop: {
          flame_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5018,
        name: 'フレイムレジストⅢ',
        sub: 'flameResist',
        level: 3,
        prop: {
          flame_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5019,
        name: 'フレイムレジストⅣ',
        sub: 'flameResist',
        level: 4,
        prop: {
          flame_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5020,
        name: 'フレイムレジストⅤ',
        sub: 'flameResist',
        level: 5,
        prop: {
          flame_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 5021,
        name: 'アイスレジストⅠ',
        sub: 'iceResist',
        level: 1,
        prop: {
          ice_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5022,
        name: 'アイスレジストⅡ',
        sub: 'iceResist',
        level: 2,
        prop: {
          ice_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5023,
        name: 'アイスレジストⅢ',
        sub: 'iceResist',
        level: 3,
        prop: {
          ice_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5024,
        name: 'アイスレジストⅣ',
        sub: 'iceResist',
        level: 4,
        prop: {
          ice_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5025,
        name: 'アイスレジストⅤ',
        sub: 'iceResist',
        level: 5,
        prop: {
          ice_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5026,
        name: 'ショックレジストⅠ',
        sub: 'shockResist',
        level: 1,
        prop: {
          shock_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5027,
        name: 'ショックレジストⅡ',
        sub: 'shockResist',
        level: 2,
        prop: {
          shock_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5028,
        name: 'ショックレジストⅢ',
        sub: 'shockResist',
        level: 3,
        prop: {
          shock_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5029,
        name: 'ショックレジストⅣ',
        sub: 'shockResist',
        level: 4,
        prop: {
          shock_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5030,
        name: 'ショックレジストⅤ',
        sub: 'shockResist',
        level: 5,
        prop: {
          shock_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5031,
        name: 'ウインドレジストⅠ',
        sub: 'windResist',
        level: 1,
        prop: {
          wind_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5032,
        name: 'ウインドレジストⅡ',
        sub: 'windResist',
        level: 2,
        prop: {
          wind_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5033,
        name: 'ウインドレジストⅢ',
        sub: 'windResist',
        level: 3,
        prop: {
          wind_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5034,
        name: 'ウインドレジストⅣ',
        sub: 'windResist',
        level: 4,
        prop: {
          wind_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5035,
        name: 'ウインドレジストⅤ',
        sub: 'windResist',
        level: 5,
        prop: {
          wind_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5036,
        name: 'ライトレジストⅠ',
        sub: 'lightResist',
        level: 1,
        prop: {
          light_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5037,
        name: 'ライトレジストⅡ',
        sub: 'lightResist',
        level: 2,
        prop: {
          light_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5038,
        name: 'ライトレジストⅢ',
        sub: 'lightResist',
        level: 3,
        prop: {
          light_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5039,
        name: 'ライトレジストⅣ',
        sub: 'lightResist',
        level: 4,
        prop: {
          light_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5040,
        name: 'ライトレジストⅤ',
        sub: 'lightResist',
        level: 5,
        prop: {
          light_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5041,
        name: 'グルームレジストⅠ',
        sub: 'gloomResist',
        level: 1,
        prop: {
          gloom_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5042,
        name: 'グルームレジストⅡ',
        sub: 'gloomResist',
        level: 2,
        prop: {
          gloom_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5043,
        name: 'グルームレジストⅢ',
        sub: 'gloomResist',
        level: 3,
        prop: {
          gloom_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5044,
        name: 'グルームレジストⅣ',
        sub: 'gloomResist',
        level: 4,
        prop: {
          gloom_res: 6
        },
        category: '抗性',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 5045,
        name: 'グルームレジストⅤ',
        sub: 'gloomResist',
        level: 5,
        prop: {
          gloom_res: 7
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 5046,
        name: 'オールレジストⅠ',
        sub: 'allResist',
        level: 1,
        prop: {
          all_res: 1
        },
        category: '抗性',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5047,
        name: 'オールレジストⅡ',
        sub: 'allResist',
        level: 2,
        prop: {
          all_res: 2
        },
        category: '抗性',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5048,
        name: 'オールレジストⅢ',
        sub: 'allResist',
        level: 3,
        prop: {
          all_res: 3
        },
        category: '抗性',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5049,
        name: 'オールレジストⅣ',
        sub: 'allResist',
        level: 4,
        prop: {
          all_res: 4
        },
        category: '抗性',
        inherit: 1,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5050,
        name: 'オールレジストⅤ',
        sub: 'allResist',
        level: 5,
        prop: {
          all_res: 5
        },
        category: '抗性',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      //=============================================================
      //异常状态赋予类能力 6
      //=============================================================

      {
        id: 6001,
        name: 'ポイズンⅠ',
        sub: 'poison',
        level: 1,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6002,
        name: 'ポイズンⅡ',
        sub: 'poison',
        level: 2,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6003,
        name: 'ポイズンⅢ',
        sub: 'poison',
        level: 3,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6004,
        name: 'ポイズンⅣ',
        sub: 'poison',
        level: 4,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6005,
        name: 'ポイズンⅤ',
        sub: 'poison',
        level: 5,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 6006,
        name: 'フリーズⅠ',
        sub: 'freeze',
        level: 1,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6007,
        name: 'フリーズⅡ',
        sub: 'freeze',
        level: 2,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6008,
        name: 'フリーズⅢ',
        sub: 'freeze',
        level: 3,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6009,
        name: 'フリーズⅣ',
        sub: 'freeze',
        level: 4,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6010,
        name: 'フリーズⅤ',
        sub: 'freeze',
        level: 5,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 6011,
        name: 'ショックⅠ',
        sub: 'shock',
        level: 1,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6012,
        name: 'ショックⅡ',
        sub: 'shock',
        level: 2,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6013,
        name: 'ショックⅢ',
        sub: 'shock',
        level: 3,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6014,
        name: 'ショックⅣ',
        sub: 'shock',
        level: 4,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6015,
        name: 'ショックⅤ',
        sub: 'shock',
        level: 5,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 6016,
        name: 'バーンⅠ',
        sub: 'burn',
        level: 1,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6017,
        name: 'バーンⅡ',
        sub: 'burn',
        level: 2,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6018,
        name: 'バーンⅢ',
        sub: 'burn',
        level: 3,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6019,
        name: 'バーンⅣ',
        sub: 'burn',
        level: 4,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6020,
        name: 'バーンⅤ',
        sub: 'burn',
        level: 5,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 6021,
        name: 'パニックⅠ',
        sub: 'panic',
        level: 1,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6022,
        name: 'パニックⅡ',
        sub: 'panic',
        level: 2,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6023,
        name: 'パニックⅢ',
        sub: 'panic',
        level: 3,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6024,
        name: 'パニックⅣ',
        sub: 'panic',
        level: 4,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6025,
        name: 'パニックⅤ',
        sub: 'panic',
        level: 5,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 6026,
        name: 'ミラージュⅠ',
        sub: 'mirage',
        level: 1,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6027,
        name: 'ミラージュⅡ',
        sub: 'mirage',
        level: 2,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6028,
        name: 'ミラージュⅢ',
        sub: 'mirage',
        level: 3,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6029,
        name: 'ミラージュⅣ',
        sub: 'mirage',
        level: 4,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: 1,
        combine: 2,
        increase: null,
        increased: null
      },
      {
        id: 6030,
        name: 'ミラージュⅤ',
        sub: 'mirage',
        level: 5,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },


      //=============================================================
      //特殊类能力 7
      //=============================================================

      {
        id: 7001,
        name: 'ソールレセプター',
        level: 0,
        prop: {
          feature: 'soul_receptor'
        },
        category: '特殊',
        inherit: false,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 7002,
        name: 'フォトンコレクト',
        level: 0,
        prop: {
          feature: 'photon_collect'
        },
        category: '特殊',
        inherit: false,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 7003,
        name: 'ギフトレセプター',
        level: 0,
        prop: {
          feature: 'gift_receptor'
        },
        category: '特殊',
        inherit: false,
        combine: false,
        increase: null,
        increased: null
      },

      //=============================================================
      //狂热类能力 8
      //=============================================================

      {
        id: 8001,
        name: 'ラヴィ・フィーバー',
        level: 0,
        prop: {
          p_atk: 10,
          arm: 5,
          hp: 10
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8002,
        name: 'セレモ・フィーバー',
        level: 0,
        prop: {
          p_atk: 10,
          arm: 5,
          hp: 5,
          pp: 1
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8003,
        name: 'ラブ・フィーバー',
        level: 0,
        prop: {
          p_atk: 10,
          arm: 5,
          pp: 2
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8004,
        name: 'エグ・フィーバー',
        level: 0,
        prop: {
          s_atk: 10,
          arm: 5,
          hp: 10
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8005,
        name: 'ノイヤ・フィーバー',
        level: 0,
        prop: {
          s_atk: 10,
          arm: 5,
          hp: 5,
          pp: 1
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8006,
        name: 'セント・フィーバー',
        level: 0,
        prop: {
          s_atk: 10,
          arm: 5,
          pp: 2
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8007,
        name: 'フログ・フィーバー',
        level: 0,
        prop: {
          m_atk: 10,
          arm: 5,
          hp: 10
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8008,
        name: 'サマー・フィーバー',
        level: 0,
        prop: {
          m_atk: 10,
          arm: 5,
          hp: 5,
          pp: 1
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8009,
        name: 'ラタン・フィーバー',
        level: 0,
        prop: {
          m_atk: 10,
          arm: 5,
          pp: 2
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 8010,
        name: 'トロクロ・フィーバー',
        level: 0,
        prop: {
          arm: 15,
          hp: 5,
          pp: 1
        },
        category: '狂热',
        inherit: 1,
        combine: false,
        increase: null,
        increased: null
      }

    ]
  });
        