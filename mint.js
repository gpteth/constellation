import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';

const execAsync = promisify(exec);

// 配置
const TOTAL_NFTS = 3000;  // 总共要铸造的数量
const RETRY_DELAY = 500; // 失败后重试延迟（毫秒）
const CHECK_INTERVAL = 100; // 检查间隔（毫秒）

async function getMintedCount() {
    try {
        // 运行 sugar show 命令获取已铸造数量
        const { stdout } = await execAsync('sugar show');
        const match = stdout.match(/Items Minted: (\d+)/);
        return match ? parseInt(match[1]) : 0;
    } catch (error) {
        console.error('获取已铸造数量失败:', error);
        return null;
    }
}

async function mintNFT() {
    try {
        console.log('执行铸造命令...');
        const { stdout, stderr } = await execAsync('sugar mint');
        console.log('铸造输出:', stdout);
        if (stderr) console.error('铸造错误:', stderr);
        return true;
    } catch (error) {
        console.error('铸造失败:', error);
        return false;
    }
}

async function main() {
    console.log(`开始自动铸造 ${TOTAL_NFTS} 个 NFT`);
    
    while (true) {
        // 获取当前铸造数量
        const mintedCount = await getMintedCount();
        
        if (mintedCount === null) {
            console.log('无法获取铸造数量，等待后重试...');
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            continue;
        }

        console.log(`当前已铸造: ${mintedCount}/${TOTAL_NFTS}`);

        // 检查是否已完成所有铸造
        if (mintedCount >= TOTAL_NFTS) {
            console.log('所有 NFT 已铸造完成！');
            break;
        }

        // 执行铸造
        const success = await mintNFT();
        
        if (!success) {
            console.log(`铸造失败，${RETRY_DELAY/1000}秒后重试...`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            continue;
        }

        // 等待一段时间后继续下一次铸造
        await new Promise(resolve => setTimeout(resolve, CHECK_INTERVAL));
    }
}

// 启动程序
main().catch(console.error);
