/**
 * @description 接口隔离原则
 */
// 修改前：
interface CloudProvider {
    storeFile: (name: string) => void;
    getFile: (name: string) => void;
    createServer: (region: string) => void;
    listServers: (region: string) => void;
    getCDNAddress: () => void;
}

class AlibabaCloud implements CloudProvider {
    storeFile = (name: string) => {}
    getFile = (name: string) => {}
    createServer = (region: string) => {}
    listServers = (region: string) => {}
    getCDNAddress = () => {}
}
// 假设腾讯云没有实现部分接口
class TencentCloud implements CloudProvider {
    storeFile = (name: string) => {}
    getFile = (name: string) => {}
    createServer = (region: string) => {} // 未实现
    listServers = (region: string) => {} // 未实现
    getCDNAddress = () => {} // 未实现
}
// 修改后：
// 把复杂的接口拆分成更细粒度的接口
interface CloudHostingProvider {
    createServer: (region: string) => void;
    listServers: (region: string) => void;
}

interface CDNProvider {
    getCDNAddress: () => void;
}

interface CloudStorageProvider {
    storeFile: (name: string) => void;
    getFile: (name: string) => void;
}

// TODO: 重新实现 阿里云
type AlibabaCloudType = CloudHostingProvider & CDNProvider & CloudStorageProvider
class AlibabaCloudNew implements AlibabaCloudType {
    storeFile = (name: string) => {}
    getFile = (name: string) => {}
    createServer = (region: string) => {}
    listServers = (region: string) => {}
    getCDNAddress = () => {}
}

// TODO: 重新实现 腾讯云
class TencentCloudNew implements CloudStorageProvider {
    storeFile = (name: string) => {}
    getFile = (name: string) => {}
}
