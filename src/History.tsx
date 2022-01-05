import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Link from '@mui/material/Link';

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2001/04/01
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>静岡県沼津市にて生まれる</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2017/04/01
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          静岡県立沼津工業高等学校電子科入学
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          WRO2018静岡県大会優勝
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2019/03/30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          静岡県立沼津工業高等学校電子科卒業
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2019/04/01
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          静岡大学情報学部情報科学科入学
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020/05/03
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          第15回情報危機管理コンテスト 経済産業大臣賞受賞(優勝)
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020/09 ~ 2020/10
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          株式会社コンビーズにてLaravel, Vue.jsを用いたWeb開発アルバイト
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020/12/06
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          セキュリティキャンプ全国大会2020 Dトラック修了
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2021/03/23 ~ 2021/03/25
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          株式会社プログメイトにてアプリ作成インターン
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2021/05/06 ~ 現在
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          株式会社日本経済新聞社にてWeb開発インターン
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2021/09/01 ~ 2021/09/30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          株式会社ヤプリにてSREインターン
          <br />
          <Link href="https://tech.yappli.io/entry/guardduty_improve" variant="body2">
            インターン生がGuardDutyのSlack通知を改善してみた！
          </Link>
          <br />
          <Link href="https://tech.yappli.io/entry/detective_dns" variant="body2">
            Amazon DetectiveでDNSの検知結果を調査できるようになったらしいので検知させてみた！
          </Link>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2021/10/04 ~ 2021/11/05
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          株式会社リクルートにてセキュリティインターン
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2021/10/26
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          MWS CUP2021にチームjinkai-countrymaamとして参加し総合4位
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
