'use strict';

angular.module('myApp.data', [])

  .factory('mainData',function(){
    return [
      {
        //=============================================================
        //塔能力
        //=============================================================
        id: 1001,
        name: 'アルター・アルマ',
        prop: {
          hp: 30,
          p_atk: 20
        },
        category: '塔',
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },
      //=============================================================
      //魂能力
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },
      //=============================================================
      //状态加成类能力
      //=============================================================

      {
        id: 3001,
        name: 'スタミナⅠ',
        level: 1,
        prop: {
          hp: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3002,
        name: 'スタミナⅡ',
        level: 2,
        prop: {
          hp: 40
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3003,
        name: 'スタミナⅢ',
        level: 3,
        prop: {
          hp: 50
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3004,
        name: 'スタミナⅣ',
        level: 4,
        prop: {
          hp: 60
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3005,
        name: 'スタミナⅤ',
        level: 5,
        prop: {
          hp: 70
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3006,
        name: 'スピリタⅠ',
        level: 1,
        prop: {
          pp: 2
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3007,
        name: 'スピリタⅡ',
        level: 2,
        prop: {
          pp: 3
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3008,
        name: 'スピリタⅢ',
        level: 3,
        prop: {
          pp: 4
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3009,
        name: 'スピリタⅣ',
        level: 4,
        prop: {
          pp: 5
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3010,
        name: 'スピリタⅤ',
        level: 5,
        prop: {
          pp: 6
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3011,
        name: 'アームⅠ',
        level: 1,
        prop: {
          arm: 10
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3012,
        name: 'アームⅡ',
        level: 2,
        prop: {
          arm: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3013,
        name: 'アームⅢ',
        level: 3,
        prop: {
          arm: 30
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3014,
        name: 'アームⅣ',
        level: 4,
        prop: {
          arm: 35
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3015,
        name: 'アームⅤ',
        level: 5,
        prop: {
          arm: 40
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3016,
        name: 'パワーⅠ',
        level: 1,
        prop: {
          p_atk: 10
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3017,
        name: 'パワーⅡ',
        level: 2,
        prop: {
          p_atk: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3018,
        name: 'パワーⅢ',
        level: 3,
        prop: {
          p_atk: 30
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3019,
        name: 'パワーⅣ',
        level: 4,
        prop: {
          p_atk: 35
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3020,
        name: 'パワーⅤ',
        level: 5,
        prop: {
          p_atk: 40
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3021,
        name: 'シュートⅠ',
        level: 1,
        prop: {
          s_atk: 10
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3022,
        name: 'シュートⅡ',
        level: 2,
        prop: {
          s_atk: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3023,
        name: 'シュートⅢ',
        level: 3,
        prop: {
          s_atk: 30
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3024,
        name: 'シュートⅣ',
        level: 4,
        prop: {
          s_atk: 35
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3025,
        name: 'シュートⅤ',
        level: 5,
        prop: {
          s_atk: 40
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3026,
        name: 'テテクニックⅠ',
        level: 1,
        prop: {
          m_atk: 10
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3027,
        name: 'テクニックⅡ',
        level: 2,
        prop: {
          m_atk: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3028,
        name: 'テクニックⅢ',
        level: 3,
        prop: {
          m_atk: 30
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3029,
        name: 'テクニックⅣ',
        level: 4,
        prop: {
          m_atk: 35
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3030,
        name: 'テクニックⅤ',
        level: 5,
        prop: {
          m_atk: 40
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3031,
        name: 'ボディⅠ',
        level: 1,
        prop: {
          p_def: 10
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3032,
        name: 'ボディⅡ',
        level: 2,
        prop: {
          p_def: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3033,
        name: 'ボディⅢ',
        level: 3,
        prop: {
          p_def: 30
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3034,
        name: 'ボディⅣ',
        level: 4,
        prop: {
          p_def: 35
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3035,
        name: 'ボディⅤ',
        level: 5,
        prop: {
          p_def: 40
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3036,
        name: 'リアクトⅠ',
        level: 1,
        prop: {
          s_def: 10
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3037,
        name: 'リアクトⅡ',
        level: 2,
        prop: {
          s_def: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3038,
        name: 'リアクトⅢ',
        level: 3,
        prop: {
          s_def: 30
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3039,
        name: 'リアクトⅣ',
        level: 4,
        prop: {
          s_def: 35
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3040,
        name: 'リアクトⅤ',
        level: 5,
        prop: {
          s_def: 40
        },
        category: '状态',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 3041,
        name: 'マインドⅠ',
        level: 1,
        prop: {
          m_def: 10
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3042,
        name: 'マインドⅡ',
        level: 2,
        prop: {
          m_def: 20
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3043,
        name: 'マインドⅢ',
        level: 3,
        prop: {
          m_def: 30
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3044,
        name: 'マインドⅣ',
        level: 4,
        prop: {
          m_def: 35
        },
        category: '状态',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 3045,
        name: 'マインドⅤ',
        level: 5,
        prop: {
          m_def: 40
        },
        category: '状态',
        inherit: true,
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
        level: 1,
        prop: {
          hp: 10,
          p_atk: 10,
          s_atk: 10,
          m_atk: 10
        },
        category: '其他',
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
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
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },
      {
        id: 4010,
        name: 'リターナーⅠ',
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
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4011,
        name: 'リターナーⅡ',
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
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4012,
        name: 'リターナーⅢ',
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
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4013,
        name: 'リターナーⅣ',
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
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 4014,
        name: 'リターナーⅤ',
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
        inherit: true,
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
        level: 1,
        prop: {
          p_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5002,
        name: 'ブロウレジストⅡ',
        level: 2,
        prop: {
          p_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5003,
        name: 'ブロウレジストⅢ',
        level: 3,
        prop: {
          p_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5004,
        name: 'ブロウレジストⅣ',
        level: 4,
        prop: {
          p_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5005,
        name: 'ブロウレジストⅤ',
        level: 5,
        prop: {
          p_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5006,
        name: 'ショットレジストⅠ',
        level: 1,
        prop: {
          s_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5007,
        name: 'ショットレジストⅡ',
        level: 2,
        prop: {
          s_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5008,
        name: 'ショットレジストⅢ',
        level: 3,
        prop: {
          s_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5009,
        name: 'ショットレジストⅣ',
        level: 4,
        prop: {
          s_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5010,
        name: 'ショットレジストⅤ',
        level: 5,
        prop: {
          s_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5011,
        name: 'マインドレジストⅠ',
        level: 1,
        prop: {
          m_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5012,
        name: 'マインドレジストⅡ',
        level: 2,
        prop: {
          m_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5013,
        name: 'マインドレジストⅢ',
        level: 3,
        prop: {
          m_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5014,
        name: 'マインドレジストⅣ',
        level: 4,
        prop: {
          m_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5015,
        name: 'マインドレジストⅤ',
        level: 5,
        prop: {
          m_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 5016,
        name: 'フレイムレジストⅠ',
        level: 1,
        prop: {
          flame_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5017,
        name: 'フレイムレジストⅡ',
        level: 2,
        prop: {
          flame_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5018,
        name: 'フレイムレジストⅢ',
        level: 3,
        prop: {
          flame_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5019,
        name: 'フレイムレジストⅣ',
        level: 4,
        prop: {
          flame_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5020,
        name: 'フレイムレジストⅤ',
        level: 5,
        prop: {
          flame_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 5021,
        name: 'アイスレジストⅠ',
        level: 1,
        prop: {
          ice_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5022,
        name: 'アイスレジストⅡ',
        level: 2,
        prop: {
          ice_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5023,
        name: 'アイスレジストⅢ',
        level: 3,
        prop: {
          ice_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5024,
        name: 'アイスレジストⅣ',
        level: 4,
        prop: {
          ice_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5025,
        name: 'アイスレジストⅤ',
        level: 5,
        prop: {
          ice_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5026,
        name: 'ショックレジストⅠ',
        level: 1,
        prop: {
          shock_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5027,
        name: 'ショックレジストⅡ',
        level: 2,
        prop: {
          shock_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5028,
        name: 'ショックレジストⅢ',
        level: 3,
        prop: {
          shock_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5029,
        name: 'ショックレジストⅣ',
        level: 4,
        prop: {
          shock_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5030,
        name: 'ショックレジストⅤ',
        level: 5,
        prop: {
          shock_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5031,
        name: 'ウインドレジストⅠ',
        level: 1,
        prop: {
          wind_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5032,
        name: 'ウインドレジストⅡ',
        level: 2,
        prop: {
          wind_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5033,
        name: 'ウインドレジストⅢ',
        level: 3,
        prop: {
          wind_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5034,
        name: 'ウインドレジストⅣ',
        level: 4,
        prop: {
          wind_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5035,
        name: 'ウインドレジストⅤ',
        level: 5,
        prop: {
          wind_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5036,
        name: 'ライトレジストⅠ',
        level: 1,
        prop: {
          light_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5037,
        name: 'ライトレジストⅡ',
        level: 2,
        prop: {
          light_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5038,
        name: 'ライトレジストⅢ',
        level: 3,
        prop: {
          light_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5039,
        name: 'ライトレジストⅣ',
        level: 4,
        prop: {
          light_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5040,
        name: 'ライトレジストⅤ',
        level: 5,
        prop: {
          light_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 5041,
        name: 'グルームレジストⅠ',
        level: 1,
        prop: {
          groom_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5042,
        name: 'グルームレジストⅡ',
        level: 2,
        prop: {
          groom_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5043,
        name: 'グルームレジストⅢ',
        level: 3,
        prop: {
          groom_res: 5
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5044,
        name: 'グルームレジストⅣ',
        level: 4,
        prop: {
          groom_res: 6
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5045,
        name: 'グルームレジストⅤ',
        level: 5,
        prop: {
          groom_res: 7
        },
        category: '抗性',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 5046,
        name: 'オールレジストⅠ',
        level: 1,
        prop: {
          all_res: 1
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5047,
        name: 'オールレジストⅡ',
        level: 2,
        prop: {
          all_res: 2
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5048,
        name: 'オールレジストⅢ',
        level: 3,
        prop: {
          all_res: 3
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5049,
        name: 'オールレジストⅣ',
        level: 4,
        prop: {
          all_res: 4
        },
        category: '抗性',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 5050,
        name: 'オールレジストⅤ',
        level: 5,
        prop: {
          all_res: 5
        },
        category: '抗性',
        inherit: true,
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
        level: 1,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6002,
        name: 'ポイズンⅡ',
        level: 2,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6003,
        name: 'ポイズンⅢ',
        level: 3,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6004,
        name: 'ポイズンⅣ',
        level: 4,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6005,
        name: 'ポイズンⅤ',
        level: 5,
        prop: {
          debuff: 'poison'
        },
        category: '异常',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 6006,
        name: 'フリーズⅠ',
        level: 1,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6007,
        name: 'フリーズⅡ',
        level: 2,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6008,
        name: 'フリーズⅢ',
        level: 3,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6009,
        name: 'フリーズⅣ',
        level: 4,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6010,
        name: 'フリーズⅤ',
        level: 5,
        prop: {
          debuff: 'freeze'
        },
        category: '异常',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 6011,
        name: 'ショックⅠ',
        level: 1,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6012,
        name: 'ショックⅡ',
        level: 2,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6013,
        name: 'ショックⅢ',
        level: 3,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6014,
        name: 'ショックⅣ',
        level: 4,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6015,
        name: 'ショックⅤ',
        level: 5,
        prop: {
          debuff: 'shock'
        },
        category: '异常',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 6016,
        name: 'バーンⅠ',
        level: 1,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6017,
        name: 'バーンⅡ',
        level: 2,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6018,
        name: 'バーンⅢ',
        level: 3,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6019,
        name: 'バーンⅣ',
        level: 4,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6020,
        name: 'バーンⅤ',
        level: 5,
        prop: {
          debuff: 'burn'
        },
        category: '异常',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },

      {
        id: 6021,
        name: 'パニックⅠ',
        level: 1,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6022,
        name: 'パニックⅡ',
        level: 2,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6023,
        name: 'パニックⅢ',
        level: 3,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6024,
        name: 'パニックⅣ',
        level: 4,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6025,
        name: 'パニックⅤ',
        level: 5,
        prop: {
          debuff: 'panic'
        },
        category: '异常',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },


      {
        id: 6026,
        name: 'ミラージュⅠ',
        level: 1,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6027,
        name: 'ミラージュⅡ',
        level: 2,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6028,
        name: 'ミラージュⅢ',
        level: 3,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6029,
        name: 'ミラージュⅣ',
        level: 4,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: true,
        combine: true,
        increase: null,
        increased: null
      },
      {
        id: 6030,
        name: 'ミラージュⅤ',
        level: 5,
        prop: {
          debuff: 'mirage'
        },
        category: '异常',
        inherit: true,
        combine: false,
        increase: null,
        increased: null
      },


      //=============================================================
      //特殊类能力 7
      //=============================================================
    ];
  });


