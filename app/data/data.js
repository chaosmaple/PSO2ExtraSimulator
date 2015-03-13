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
          agi: 15
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
          agi: 30
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
          agi: 5
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
          agi: 30
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
          agi: 5          
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
          agi: 15        
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
          agi: 15
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
          agi: 5
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
          agi: 30
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
      }
    ];
  });


